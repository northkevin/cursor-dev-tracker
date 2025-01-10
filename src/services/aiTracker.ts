import * as db from "../database";

interface TrackerState {
  sessionId: string | null;
}

const state: TrackerState = {
  sessionId: null,
};

export const setSessionId = (sessionId: string): void => {
  state.sessionId = sessionId;
};

export const trackInteraction = async (
  sessionId: string,
  prompt: string,
  response: string
): Promise<void> => {
  await db.recordAIInteraction({
    sessionId,
    prompt,
    response,
  });
};
