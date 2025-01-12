import * as vscode from "vscode";
import { GitOperationData } from "./services/gitTracker";
import { BuildData } from "./services/buildTestTracker";
import { TestData } from "./services/buildTestTracker";
import { logger } from "./utils/logger";

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
  const session = {
    id: Date.now().toString(),
    startTime: new Date(),
    endTime: null,
  };

  const sessions = await globalState.get("sessions", []);
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
}

interface AIInteraction {
  id: string;
  sessionId: string;
  timestamp: Date;
  prompt: string;
  response: string;
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
}) => {
  const fileChange = {
    id: Date.now().toString(),
    timestamp: new Date(),
    ...data,
  };

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
  return fileChange;
};

export const recordAIInteraction = async (data: {
  sessionId: string;
  prompt: string;
  response: string;
}) => {
  const aiInteraction = {
    id: Date.now().toString(),
    timestamp: new Date(),
    ...data,
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
  return aiInteraction;
};

export const recordGitOperation = async (data: {
  sessionId: string;
  command: string;
  gitData: GitOperationData;
}) => {
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
  return command;
};

export const recordBuildOperation = async (data: {
  sessionId: string;
  command: string;
  buildData: BuildData;
}) => {
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
  return command;
};

export const recordTestOperation = async (data: {
  sessionId: string;
  command: string;
  testData: TestData;
}) => {
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
  return command;
};

export const getDayActivities = async (date: string) => {
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
