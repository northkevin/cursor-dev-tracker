import * as vscode from "vscode";
import { GitOperationData } from "./services/gitTracker";
import { BuildData } from "./services/buildTestTracker";
import { TestData } from "./services/buildTestTracker";
import { logger } from "./utils/logger";
import { outputChannel } from "./utils/outputChannel";
import * as aiTracker from "./services/aiTracker";

let globalState: vscode.Memento;

export const initialize = async (
  context: vscode.ExtensionContext
): Promise<void> => {
  globalState = context.globalState;
  console.log("🗄️ Storage initialization:");
  console.log("- Global State:", globalState ? "✅" : "❌");
  console.log("- Storage Keys:", await globalState.keys());
  console.log("- Sessions:", await globalState.get("sessions", []));
  logger.info("Storage initialized");
};

export const createSession = async () => {
  const session: Session = {
    id: Date.now().toString(),
    startTime: new Date(),
    endTime: null,
    fileChanges: [],
    aiInteractions: [],
    commands: [],
  };

  const sessions = await globalState.get<Session[]>("sessions", []);
  sessions.push(session);
  await globalState.update("sessions", sessions);
  return session;
};

interface Session {
  id: string;
  startTime: Date;
  endTime: Date | null;
  fileChanges: FileChange[];
  aiInteractions: AIInteraction[];
  commands: Command[];
}

interface FileChange {
  id: string;
  sessionId: string;
  timestamp: Date;
  filePath: string;
  changeType: string;
  language?: string;
  lineCount?: number;
  changeSize?: number;
}

interface AIInteraction {
  id: string;
  sessionId: string;
  timestamp: Date;
  prompt: string;
  response: string;
  type: "chat" | "composer" | "inline";
  success: boolean;
  duration: number;
  metrics: {
    promptLength: number;
    responseLength: number;
    codeBlockCount: number;
    fileEditCount: number;
    categories: string[];
    languages: string[];
    sentiment: "positive" | "negative" | "neutral";
    hasError: boolean;
  };
}

interface Command {
  id: string;
  sessionId: string;
  timestamp: Date;
  command: string;
  type: string;
  gitData?: {
    operation: string;
    branch: string;
    commitHash?: string;
    filesChanged?: string | null;
    commitMessage?: string;
    linesChanged?: { added: number; removed: number };
  };
  buildData?: {
    environment: string;
    framework: string;
    success: boolean;
    duration: number;
    errors: string | null;
    warnings: string | null;
    outputLog?: string;
  };
  testData?: {
    framework: string;
    success: boolean;
    duration: number;
    totalTests: number;
    passedTests: number;
    failedTests: number;
    skippedTests: number;
    errors: string | null;
    outputLog?: string;
  };
}

export const endSession = async (sessionId: string) => {
  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === sessionId ? { ...session, endTime: new Date() } : session
  );
  await globalState.update("sessions", updatedSessions);
  return updatedSessions.find((s) => s.id === sessionId);
};

export const recordFileChange = async (data: {
  sessionId: string;
  filePath: string;
  changeType: string;
  language?: string;
  lineCount?: number;
  changeSize?: number;
}) => {
  const fileChange = {
    id: Date.now().toString(),
    timestamp: new Date(),
    ...data,
  };
  outputChannel.log(`📝 File Change: ${data.filePath} (${data.changeType})`);

  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === data.sessionId
      ? {
          ...session,
          fileChanges: [...(session.fileChanges || []), fileChange],
        }
      : session
  );
  await globalState.update("sessions", updatedSessions);
  outputChannel.log(`✅ Stored file change for session ${data.sessionId}`);
  return fileChange;
};

export const recordAIInteraction = async (data: {
  sessionId: string;
  prompt: string;
  response: string;
  type: "chat" | "composer" | "inline";
  success: boolean;
  duration: number;
  metrics?: {
    promptLength: number;
    responseLength: number;
    codeBlockCount: number;
    fileEditCount: number;
    categories: string[];
    languages: string[];
    sentiment: "positive" | "negative" | "neutral";
    hasError: boolean;
  };
}) => {
  outputChannel.log(`🤖 AI Interaction: ${data.prompt.slice(0, 50)}...`);

  const metrics = await aiTracker.analyzeInteraction(
    data.prompt,
    data.response
  );
  outputChannel.log(
    `📊 AI Metrics: ${metrics.categories.join(", ")} (${metrics.sentiment})`
  );

  const aiInteraction: AIInteraction = {
    id: Date.now().toString(),
    timestamp: new Date(),
    sessionId: data.sessionId,
    prompt: data.prompt,
    response: data.response,
    type: data.type,
    success: data.success,
    duration: data.duration,
    metrics: metrics,
  };

  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === data.sessionId
      ? {
          ...session,
          aiInteractions: [...(session.aiInteractions || []), aiInteraction],
        }
      : session
  );
  await globalState.update("sessions", updatedSessions);
  outputChannel.log(`✅ Stored AI interaction for session ${data.sessionId}`);
  return aiInteraction;
};

export const recordGitOperation = async (data: {
  sessionId: string;
  command: string;
  gitData: GitOperationData;
}) => {
  outputChannel.log(
    `📦 Git Operation: ${data.gitData.operation} on ${data.gitData.branch}`
  );
  const command = {
    id: Date.now().toString(),
    timestamp: new Date(),
    sessionId: data.sessionId,
    command: data.command,
    type: "git",
    gitData: {
      ...data.gitData,
      filesChanged: data.gitData.filesChanged
        ? JSON.stringify(data.gitData.filesChanged)
        : null,
    },
  };

  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === data.sessionId
      ? {
          ...session,
          commands: [...(session.commands || []), command],
        }
      : session
  );
  await globalState.update("sessions", updatedSessions);
  outputChannel.log(`✅ Stored git operation for session ${data.sessionId}`);
  return command;
};

export const recordBuildOperation = async (data: {
  sessionId: string;
  command: string;
  buildData: BuildData;
}) => {
  outputChannel.log(
    `🔨 Build Operation: ${data.command} (${data.buildData.framework}) - ${
      data.buildData.success ? "✅ Success" : "❌ Failed"
    }`
  );
  const command = {
    id: Date.now().toString(),
    timestamp: new Date(),
    sessionId: data.sessionId,
    command: data.command,
    type: "build",
    buildData: {
      ...data.buildData,
      errors: data.buildData.errors
        ? JSON.stringify(data.buildData.errors)
        : null,
      warnings: data.buildData.warnings
        ? JSON.stringify(data.buildData.warnings)
        : null,
    },
  };

  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === data.sessionId
      ? {
          ...session,
          commands: [...(session.commands || []), command],
        }
      : session
  );
  await globalState.update("sessions", updatedSessions);
  outputChannel.log(`✅ Stored build operation for session ${data.sessionId}`);
  return command;
};

export const recordTestOperation = async (data: {
  sessionId: string;
  command: string;
  testData: TestData;
}) => {
  outputChannel.log(
    `🧪 Test Operation: ${data.command} - Passed: ${data.testData.passedTests}/${data.testData.totalTests}`
  );
  const command = {
    id: Date.now().toString(),
    timestamp: new Date(),
    sessionId: data.sessionId,
    command: data.command,
    type: "test",
    testData: {
      ...data.testData,
      errors: data.testData.errors
        ? JSON.stringify(data.testData.errors)
        : null,
    },
  };

  const sessions = await globalState.get<Session[]>("sessions", []);
  const updatedSessions = sessions.map((session) =>
    session.id === data.sessionId
      ? {
          ...session,
          commands: [...(session.commands || []), command],
        }
      : session
  );
  await globalState.update("sessions", updatedSessions);
  outputChannel.log(`✅ Stored test operation for session ${data.sessionId}`);
  return command;
};

export const getDayActivities = async (
  date: string
): Promise<{
  commands: Command[];
  fileChanges: FileChange[];
  aiInteractions: AIInteraction[];
}> => {
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(endOfDay.getDate() + 1);

  const sessions = await globalState.get<Session[]>("sessions", []);
  const dayActivities = sessions.filter((session) => {
    const sessionDate = new Date(session.startTime);
    return sessionDate >= startOfDay && sessionDate < endOfDay;
  });

  return {
    commands: dayActivities.flatMap((s) => s.commands || []),
    fileChanges: dayActivities.flatMap((s) => s.fileChanges || []),
    aiInteractions: dayActivities.flatMap((s) => s.aiInteractions || []),
  };
};

export const verifyConnection = async (): Promise<boolean> => {
  return globalState !== undefined;
};

export const getStorageData = async (): Promise<Session[]> => {
  return await globalState.get<Session[]>("sessions", []);
};

export const getStorageKeys = async (): Promise<readonly string[]> => {
  return await globalState.keys();
};

export const cleanStorage = async (cleanSessions: Session[]): Promise<void> => {
  // Only clean our extension's sessions data
  const ourKeys = await globalState.keys();
  if (!ourKeys.includes("sessions")) {
    outputChannel.log("⚠️ No sessions data found to clean");
    return;
  }

  await globalState.update("sessions", cleanSessions);
  outputChannel.log("✅ Dev Tracker sessions cleaned");
};
