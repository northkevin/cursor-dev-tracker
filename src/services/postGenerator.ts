import { logger } from "../utils/logger";
import * as yaml from "yaml";
import { promises as fs } from "fs";
import * as path from "path";

interface DailySummary {
  date: string;
  activity: {
    summary: string[];
    timeSpent: Record<string, number>;
    mainTopics: string[];
  };
  git: {
    commits: number;
    filesChanged: number;
    additions: number;
    deletions: number;
    branches: string[];
    mainOperations: Record<string, number>;
  };
  ai: {
    totalQuestions: number;
    composerQuestions: number;
    chatQuestions: number;
    acceptedSuggestions: number;
    rejectedSuggestions: number;
    errorFixRequests: Record<string, number>;
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
  timeTracking: {
    totalTime: number;
    details: any[];
    byCategory: Record<string, number>;
    mostActiveHours: number[];
    breaks: any[];
  };
}

const generateBrainUpgradePost = (summary: DailySummary): string => {
  const sections: string[] = [];
  const date = new Date(summary.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Header
  sections.push(`# Brain Upgrade - ${date}\n`);

  // Time Summary
  const hours = Math.floor(summary.timeTracking.totalTime / 60);
  const minutes = Math.round(summary.timeTracking.totalTime % 60);
  sections.push(`## Time Investment`);
  sections.push(`Total Focus Time: ${hours}h ${minutes}m`);

  if (Object.keys(summary.timeTracking.byCategory).length > 0) {
    sections.push("\nBreakdown:");
    Object.entries(summary.timeTracking.byCategory)
      .sort(([, a], [, b]) => b - a)
      .forEach(([category, minutes]) => {
        sections.push(`- ${category}: ${Math.round(minutes)}m`);
      });
  }

  // Development Activity
  sections.push("\n## Development Activity");
  if (summary.git.commits > 0) {
    sections.push(`- Made ${summary.git.commits} commits`);
    sections.push(`- Changed ${summary.git.filesChanged} files`);
    if (summary.git.branches.length > 0) {
      sections.push(`- Worked on branches: ${summary.git.branches.join(", ")}`);
    }
  }

  // AI Collaboration
  if (summary.ai.totalQuestions > 0) {
    sections.push("\n## AI Collaboration");
    sections.push(`- Total AI interactions: ${summary.ai.totalQuestions}`);
    sections.push(`- Accepted suggestions: ${summary.ai.acceptedSuggestions}`);
    if (summary.ai.topTopics.length > 0) {
      sections.push(`- Main topics: ${summary.ai.topTopics.join(", ")}`);
    }
  }

  // Development Metrics
  if (
    summary.development.buildAttempts > 0 ||
    summary.development.testsRun > 0
  ) {
    sections.push("\n## Development Metrics");
    if (summary.development.buildAttempts > 0) {
      sections.push(`- Build attempts: ${summary.development.buildAttempts}`);
      sections.push(
        `- Build success rate: ${Math.round(
          ((summary.development.buildAttempts -
            summary.development.buildErrors) /
            summary.development.buildAttempts) *
            100
        )}%`
      );
    }
    if (summary.development.testsRun > 0) {
      sections.push(`- Tests run: ${summary.development.testsRun}`);
      sections.push(
        `- Test pass rate: ${Math.round(
          (summary.development.testsPassed / summary.development.testsRun) * 100
        )}%`
      );
    }
  }

  // Time Patterns
  if (summary.timeTracking.mostActiveHours.length > 0) {
    sections.push("\n## Time Patterns");
    const activeHours = summary.timeTracking.mostActiveHours
      .map((h) => `${h}:00`)
      .join(", ");
    sections.push(`- Peak productivity hours: ${activeHours}`);
    sections.push(`- Number of breaks: ${summary.timeTracking.breaks.length}`);
  }

  return sections.join("\n");
};

export const generatePostForDate = async (
  workspaceRoot: string,
  date: string
): Promise<string> => {
  const historyPath = path.join(workspaceRoot, ".cursor", "dev-history.yaml");

  try {
    const content = await fs.readFile(historyPath, "utf8");
    const history = yaml.parse(content);

    if (!history[date]) {
      return `No data found for ${date}`;
    }

    return generateBrainUpgradePost(history[date]);
  } catch (error) {
    logger.error("Failed to generate post:", error);
    return "Failed to generate brain upgrade post";
  }
};
