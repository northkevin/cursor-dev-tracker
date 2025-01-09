import { DatabaseManager } from "./database";
import { TextDocumentChangeEvent } from "cursor-ide";
import { AITracker } from "./services/aiTracker";

export class SessionManager {
  private currentSessionId: string | null = null;
  private dbManager: DatabaseManager;
  private aiTracker: AITracker;

  constructor(dbManager: DatabaseManager) {
    this.dbManager = dbManager;
    this.aiTracker = new AITracker(dbManager);
  }

  async startSession(): Promise<void> {
    const session = await this.dbManager.createSession();
    this.currentSessionId = session.id;
    this.aiTracker.setSessionId(session.id);
    console.log(`Started new session: ${session.id}`);
  }

  async endSession(): Promise<void> {
    if (this.currentSessionId) {
      await this.dbManager.endSession(this.currentSessionId);
      this.currentSessionId = null;
    }
  }

  async trackFileChange(event: TextDocumentChangeEvent): Promise<void> {
    if (!this.currentSessionId) return;

    await this.dbManager.recordFileChange({
      sessionId: this.currentSessionId,
      filePath: event.document.uri.fsPath,
      changeType: "modified",
    });
  }

  async trackAIInteraction(prompt: string, response: string): Promise<void> {
    await this.aiTracker.trackInteraction(prompt, response);
  }
}
