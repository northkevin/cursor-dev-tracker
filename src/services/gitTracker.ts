import * as db from "../database";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface GitOperationData {
  operation: string;
  branch: string;
  commitHash?: string;
  filesChanged?: string[];
}

interface TrackerState {
  sessionId: string | null;
}

const state: TrackerState = {
  sessionId: null,
};

export const setSessionId = (sessionId: string): void => {
  state.sessionId = sessionId;
};

const getCurrentBranch = async (): Promise<string> => {
  try {
    const { stdout } = await execAsync("git rev-parse --abbrev-ref HEAD");
    return stdout.trim();
  } catch (error) {
    console.error("Error getting current branch:", error);
    return "unknown";
  }
};

const getChangedFiles = async (): Promise<string[]> => {
  try {
    const { stdout } = await execAsync("git diff --name-only");
    return stdout.trim().split("\n").filter(Boolean);
  } catch (error) {
    console.error("Error getting changed files:", error);
    return [];
  }
};

const getLatestCommitHash = async (): Promise<string> => {
  try {
    const { stdout } = await execAsync("git rev-parse HEAD");
    return stdout.trim();
  } catch (error) {
    console.error("Error getting commit hash:", error);
    return "unknown";
  }
};

const getOperationData = async (
  operation: string
): Promise<Omit<GitOperationData, "operation">> => {
  const branch = await getCurrentBranch();
  const baseData = { branch };

  switch (operation) {
    case "commit":
      return {
        ...baseData,
        filesChanged: await getChangedFiles(),
        commitHash: await getLatestCommitHash(),
      };
    case "push":
    case "pull":
      return {
        ...baseData,
        commitHash: await getLatestCommitHash(),
      };
    default:
      return baseData;
  }
};

export const trackOperation = async (
  sessionId: string,
  operation: string
): Promise<void> => {
  const operationData = await getOperationData(operation);

  await db.recordGitOperation({
    sessionId,
    command: `git ${operation}`,
    gitData: {
      operation,
      ...operationData,
    },
  });
};
