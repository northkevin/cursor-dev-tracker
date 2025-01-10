import * as yaml from "yaml";
import { promises as fs } from "fs";
import * as path from "path";
import * as db from "../database";
import { logger } from "../utils/logger";

interface TimeSpentDetail {
  duration: number; // in minutes
  startTime: string;
  endTime: string;
  category: string;
  description: string;
}

interface ActivityTimeTracking {
  totalTime: number; // in minutes
  details: TimeSpentDetail[];
  byCategory: Record<string, number>;
  mostActiveHours: number[];
  breaks: TimeSpentDetail[];
}

interface DailySummary {
  date: string;
  activity: {
    summary: string[];
    timeSpent: Record<string, number>; // in minutes
    mainTopics: string[];
  };
  git: {
    commits: number;
    filesChanged: number;
    additions: number;
    deletions: number;
    branches: string[];
    mainOperations: Record<string, number>; // e.g., { "commit": 5, "push": 3 }
  };
  ai: {
    totalQuestions: number;
    composerQuestions: number;
    chatQuestions: number;
    acceptedSuggestions: number;
    rejectedSuggestions: number;
    errorFixRequests: {
      console: number;
      lint: number;
      type: number;
    };
    topTopics: string[];
  };
  development: {
    buildAttempts: number;
    buildErrors: number;
    testsRun: number;
    testsPassed: number;
    testsFailed: number;
    averageBuildTime: number;
  };
  timeTracking: ActivityTimeTracking;
}

interface ActivityResult {
  [key: string]: number;
  commands: number;
  fileChanges: number;
  aiInteractions: number;
}

const getHistoryFilePath = async (workspaceRoot: string): Promise<string> => {
  const cursorDir = path.join(workspaceRoot, ".cursor");
  await fs.mkdir(cursorDir, { recursive: true });
  return path.join(cursorDir, "dev-history.yaml");
};

const processGitActivities = (commands: any[]): DailySummary["git"] => {
  const operations: Record<string, number> = {};
  const branches = new Set<string>();
  let filesChanged = 0;
  let additions = 0;
  let deletions = 0;

  commands
    .filter((cmd) => cmd.type === "git" && cmd.gitData)
    .forEach((cmd) => {
      const op = cmd.gitData.operation;
      operations[op] = (operations[op] || 0) + 1;
      if (cmd.gitData.branch) branches.add(cmd.gitData.branch);

      // Parse filesChanged JSON if exists
      if (cmd.gitData.filesChanged) {
        const files = JSON.parse(cmd.gitData.filesChanged);
        filesChanged += files.length;
      }
    });

  return {
    commits: operations["commit"] || 0,
    filesChanged,
    additions,
    deletions,
    branches: Array.from(branches),
    mainOperations: operations,
  };
};

const processAIActivities = (aiInteractions: any[]): DailySummary["ai"] => {
  const errorTypes = {
    console: 0,
    lint: 0,
    type: 0,
  };

  const topics = new Map<string, number>();

  aiInteractions.forEach((interaction) => {
    // Count error fix requests
    if (interaction.prompt.toLowerCase().includes("error")) {
      if (interaction.prompt.toLowerCase().includes("console"))
        errorTypes.console++;
      if (interaction.prompt.toLowerCase().includes("lint")) errorTypes.lint++;
      if (interaction.prompt.toLowerCase().includes("type")) errorTypes.type++;
    }

    // Extract potential topics (simple implementation)
    const words = interaction.prompt.split(/\s+/);
    words.forEach((word: string) => {
      if (word.length > 4) {
        // Ignore short words
        topics.set(word, (topics.get(word) || 0) + 1);
      }
    });
  });

  // Get top topics
  const topTopics = Array.from(topics.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([topic]) => topic);

  return {
    totalQuestions: aiInteractions.length,
    composerQuestions: aiInteractions.filter((i) =>
      i.prompt.includes("composer")
    ).length,
    chatQuestions: aiInteractions.filter((i) => i.prompt.includes("chat"))
      .length,
    acceptedSuggestions: aiInteractions.filter(
      (i) =>
        i.response.includes("accepted") || i.response.includes("implemented")
    ).length,
    rejectedSuggestions: aiInteractions.filter(
      (i) => i.response.includes("rejected") || i.response.includes("declined")
    ).length,
    errorFixRequests: errorTypes,
    topTopics,
  };
};

const processDevelopmentActivities = (
  commands: any[]
): DailySummary["development"] => {
  const buildCommands = commands.filter(
    (cmd) => cmd.type === "build" && cmd.buildData
  );
  const testCommands = commands.filter(
    (cmd) => cmd.type === "test" && cmd.testData
  );

  const buildTimes = buildCommands.map((cmd) => cmd.buildData.duration);
  const averageBuildTime = buildTimes.length
    ? buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length
    : 0;

  return {
    buildAttempts: buildCommands.length,
    buildErrors: buildCommands.filter((cmd) => !cmd.buildData.success).length,
    testsRun: testCommands.reduce(
      (sum, cmd) => sum + cmd.testData.totalTests,
      0
    ),
    testsPassed: testCommands.reduce(
      (sum, cmd) => sum + cmd.testData.passedTests,
      0
    ),
    testsFailed: testCommands.reduce(
      (sum, cmd) => sum + cmd.testData.failedTests,
      0
    ),
    averageBuildTime,
  };
};

const generateActivitySummary = (
  activities: ActivityResult
): DailySummary["activity"] => {
  const summary = [];
  const timeSpent: Record<string, number> = {};
  const topics = new Set<string>();

  if (activities.commands > 0) {
    summary.push(`Executed ${activities.commands} commands`);
    timeSpent["Command Execution"] = Math.round(activities.commands * 1.5); // Estimate
  }

  if (activities.fileChanges > 0) {
    summary.push(`Modified ${activities.fileChanges} files`);
    timeSpent["File Modifications"] = Math.round(activities.fileChanges * 2); // Estimate
  }

  if (activities.aiInteractions > 0) {
    summary.push(`Had ${activities.aiInteractions} AI interactions`);
    timeSpent["AI Assistance"] = Math.round(activities.aiInteractions * 3); // Estimate
  }

  return {
    summary,
    timeSpent,
    mainTopics: Array.from(topics),
  };
};

const calculateTimeGaps = (
  activities: any[]
): { gaps: TimeSpentDetail[]; activeHours: number[] } => {
  const sortedActivities = activities.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const gaps: TimeSpentDetail[] = [];
  const hourActivity = new Array(24).fill(0);
  const BREAK_THRESHOLD = 15; // minutes

  for (let i = 1; i < sortedActivities.length; i++) {
    const prevTime = new Date(sortedActivities[i - 1].timestamp);
    const currTime = new Date(sortedActivities[i].timestamp);
    const diffMinutes = (currTime.getTime() - prevTime.getTime()) / (1000 * 60);

    hourActivity[prevTime.getHours()]++;

    if (diffMinutes > BREAK_THRESHOLD) {
      gaps.push({
        duration: diffMinutes,
        startTime: prevTime.toISOString(),
        endTime: currTime.toISOString(),
        category: "Break",
        description: `${diffMinutes.toFixed(1)} minute break`,
      });
    }
  }

  const mostActiveHours = hourActivity
    .map((count, hour) => ({ count, hour }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(({ hour }) => hour);

  return { gaps, activeHours: mostActiveHours };
};

const calculateActivityDuration = (
  activity: any,
  nextActivity?: any
): TimeSpentDetail => {
  const startTime = new Date(activity.timestamp);
  const endTime = nextActivity
    ? new Date(nextActivity.timestamp)
    : new Date(startTime.getTime() + 5 * 60 * 1000); // Default 5 minutes if no next activity

  const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60);

  let category = "Other";
  let description = "Unknown activity";

  if (activity.type === "git") {
    category = "Version Control";
    description = `Git operation: ${activity.gitData?.operation || "unknown"}`;
  } else if ("prompt" in activity) {
    category = "AI Interaction";
    description = `AI interaction: ${activity.prompt.slice(0, 50)}...`;
  } else if (activity.type === "build") {
    category = "Development";
    description = `Build: ${activity.buildData?.framework || "unknown"}`;
  } else if (activity.type === "test") {
    category = "Testing";
    description = `Tests: ${activity.testData?.totalTests || 0} total`;
  }

  return {
    duration: Math.min(duration, 30), // Cap at 30 minutes
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    category,
    description,
  };
};

const processTimeTracking = (
  commands: any[],
  fileChanges: any[],
  aiInteractions: any[]
): ActivityTimeTracking => {
  const allActivities = [...commands, ...fileChanges, ...aiInteractions].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const details: TimeSpentDetail[] = [];
  const byCategory: Record<string, number> = {};

  // Calculate time spent on each activity
  for (let i = 0; i < allActivities.length; i++) {
    const detail = calculateActivityDuration(
      allActivities[i],
      allActivities[i + 1]
    );

    details.push(detail);
    byCategory[detail.category] =
      (byCategory[detail.category] || 0) + detail.duration;
  }

  const { gaps, activeHours } = calculateTimeGaps(allActivities);

  return {
    totalTime: details.reduce((sum, detail) => sum + detail.duration, 0),
    details,
    byCategory,
    mostActiveHours: activeHours,
    breaks: gaps,
  };
};

export const generateDailySummary = async (
  sessionId: string
): Promise<DailySummary> => {
  const today = new Date().toISOString().split("T")[0];
  logger.debug("Generating daily summary for:", today);

  const [commands, fileChanges, aiInteractions] = await db.getDayActivities(
    today
  );
  logger.debug("Activity counts:", {
    commands: commands.length,
    fileChanges: fileChanges.length,
    aiInteractions: aiInteractions.length,
  });

  const activities: ActivityResult = {
    commands: commands.length,
    fileChanges: fileChanges.length,
    aiInteractions: aiInteractions.length,
  };

  const timeTracking = processTimeTracking(
    commands,
    fileChanges,
    aiInteractions
  );
  logger.debug("Time tracking summary:", {
    totalTime: timeTracking.totalTime,
    categories: Object.keys(timeTracking.byCategory),
    breaks: timeTracking.breaks.length,
  });

  // Update activity summary with time tracking insights
  const activitySummary = generateActivitySummary(activities);
  activitySummary.timeSpent = timeTracking.byCategory;
  activitySummary.summary.push(
    `Total active time: ${timeTracking.totalTime.toFixed(1)} minutes`,
    `Most active hours: ${timeTracking.mostActiveHours
      .map((h) => `${h}:00`)
      .join(", ")}`,
    `Took ${timeTracking.breaks.length} breaks`
  );

  return {
    date: today,
    activity: activitySummary,
    git: processGitActivities(commands),
    ai: processAIActivities(aiInteractions),
    development: processDevelopmentActivities(commands),
    timeTracking,
  };
};

export const updateHistoryFile = async (
  workspaceRoot: string,
  summary: DailySummary
): Promise<void> => {
  const historyPath = await getHistoryFilePath(workspaceRoot);
  logger.debug("Updating history file at:", historyPath);

  // Read existing history or create new
  let history: Record<string, DailySummary> = {};
  try {
    const content = await fs.readFile(historyPath, "utf8");
    history = yaml.parse(content);
  } catch (error) {
    // File doesn't exist yet, start fresh
  }

  // Update with new summary
  history[summary.date] = summary;

  // Write back to file
  await fs.writeFile(historyPath, yaml.stringify(history), "utf8");
  logger.info("History file updated successfully");
};

export const verifyHistoryFile = async (
  workspaceRoot: string
): Promise<boolean> => {
  try {
    const historyPath = await getHistoryFilePath(workspaceRoot);
    await fs.access(historyPath);
    return true;
  } catch {
    return false;
  }
};
