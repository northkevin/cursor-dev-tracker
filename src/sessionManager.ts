import * as db from "./database";
import * as aiTracker from "./services/aiTracker";
import * as gitTracker from "./services/gitTracker";
import * as vscode from "vscode";
import { outputChannel } from "./utils/outputChannel";
import { logger } from "./utils/logger";
import { debounce } from "./utils/debounce";
import { isProjectFile } from "./utils/fileUtils";

interface SessionState {
  currentSessionId: string | null;
}

const state: SessionState = {
  currentSessionId: null,
};

interface FileChangeBuffer {
  changes: Set<string>;
  lastChange: number;
}

const fileBuffer: FileChangeBuffer = {
  changes: new Set(),
  lastChange: Date.now(),
};

// Ignore patterns for file changes
const IGNORE_PATTERNS = [
  /^\.git\//,
  /^\.cursor/,
  /extension-output-/,
  /\.log$/,
  /\.vsix$/,
  /node_modules/,
];

export const startSession = async (): Promise<void> => {
  const session = await db.createSession();
  state.currentSessionId = session.id;
  aiTracker.setSessionId(session.id);
  gitTracker.setSessionId(session.id);
  console.log(`Started new session: ${session.id}`);
};

export const endSession = async (): Promise<void> => {
  if (state.currentSessionId) {
    await db.endSession(state.currentSessionId);
    state.currentSessionId = null;
  }
};

export const trackFileChange = async (
  event: vscode.TextDocumentChangeEvent
): Promise<void> => {
  if (!state.currentSessionId) return;

  const filePath = event.document.uri.fsPath;

  // Check if this is a relevant project file
  if (!(await isProjectFile(filePath))) {
    return;
  }

  // Skip small changes (like single character)
  const totalChanges = event.contentChanges.reduce(
    (size, change) => size + change.text.length,
    0
  );
  if (totalChanges < 3) return;

  // Add to buffer instead of immediate tracking
  fileBuffer.changes.add(filePath);
  fileBuffer.lastChange = Date.now();

  // Debounced flush of changes
  debouncedFlushChanges();
};

const FLUSH_DELAY = 2000; // 2 seconds

const flushChanges = async () => {
  if (fileBuffer.changes.size === 0) return;

  const changes = Array.from(fileBuffer.changes);
  fileBuffer.changes.clear();

  // Group changes by file type
  const changesByType = changes.reduce((acc, file) => {
    const ext = file.split(".").pop() || "unknown";
    acc[ext] = (acc[ext] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Log a summary instead of individual changes
  outputChannel.log(
    `📝 Batch file changes: ${changes.length} files (${Object.entries(
      changesByType
    )
      .map(([ext, count]) => `${ext}: ${count}`)
      .join(", ")})`
  );

  // Record a single aggregated change
  await db.recordFileChange({
    sessionId: state.currentSessionId!,
    filePath: "batch-update",
    changeType: "modified",
    changeSize: changes.length,
  });
};

const debouncedFlushChanges = debounce(flushChanges, FLUSH_DELAY);

export const trackAIInteraction = async (
  prompt: string,
  response: string,
  type: "chat" | "composer" | "inline" = "chat",
  success?: boolean
): Promise<void> => {
  if (!state.currentSessionId) return;

  try {
    const startTime = Date.now();
    const duration = (Date.now() - startTime) / 1000;

    await aiTracker.trackInteraction(
      state.currentSessionId,
      prompt,
      response,
      type,
      {
        success: success ?? !response.toLowerCase().includes("error"),
        duration,
      }
    );
    outputChannel.log(
      `✅ Tracked AI interaction (${type}) - Duration: ${duration}s`
    );
  } catch (error) {
    outputChannel.log(`❌ Failed to track AI interaction: ${error}`);
    logger.error("Failed to track AI interaction", error);
  }
};

export const trackGitOperation = async (operation: string): Promise<void> => {
  if (!state.currentSessionId) return;
  await gitTracker.trackOperation(state.currentSessionId, operation);
};

export const isSessionActive = (): boolean => {
  return state.currentSessionId !== null;
};
