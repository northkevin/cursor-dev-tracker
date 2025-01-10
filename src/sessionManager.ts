import { TextDocumentChangeEvent } from "cursor-ide";
import * as db from "./database";
import * as aiTracker from "./services/aiTracker";
import * as gitTracker from "./services/gitTracker";

interface SessionState {
  currentSessionId: string | null;
}

const state: SessionState = {
  currentSessionId: null,
};

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
  event: TextDocumentChangeEvent
): Promise<void> => {
  if (!state.currentSessionId) return;

  await db.recordFileChange({
    sessionId: state.currentSessionId,
    filePath: event.document.uri.fsPath,
    changeType: "modified",
  });
};

export const trackAIInteraction = async (
  prompt: string,
  response: string
): Promise<void> => {
  if (!state.currentSessionId) return;
  await aiTracker.trackInteraction(state.currentSessionId, prompt, response);
};

export const trackGitOperation = async (operation: string): Promise<void> => {
  if (!state.currentSessionId) return;
  await gitTracker.trackOperation(state.currentSessionId, operation);
};
