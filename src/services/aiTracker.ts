import { DatabaseManager } from "../database";

export class AITracker {
  private sessionId: string | null = null;
  private dbManager: DatabaseManager;

  constructor(dbManager: DatabaseManager) {
    this.dbManager = dbManager;
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }

  async trackInteraction(prompt: string, response: string): Promise<void> {
    if (!this.sessionId) {
      console.warn("No active session for AI interaction tracking");
      return;
    }

    await this.dbManager.recordAIInteraction({
      sessionId: this.sessionId,
      prompt,
      response,
    });
  }
}
