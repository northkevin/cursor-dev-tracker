import { ExtensionContext, TextDocumentChangeEvent } from "cursor-ide";
import { SessionManager } from "./sessionManager";
import { DatabaseManager } from "./database";

let sessionManager: SessionManager;

export async function activate(context: ExtensionContext) {
  // Initialize database
  const dbManager = new DatabaseManager();
  await dbManager.initialize();

  // Start session tracking
  sessionManager = new SessionManager(dbManager);
  await sessionManager.startSession();

  // Register event listeners
  context.subscriptions.push(
    cursor.workspace.onDidChangeTextDocument(
      (event: TextDocumentChangeEvent) => {
        sessionManager.trackFileChange(event);
      }
    ),

    cursor.commands.registerCommand("dev-tracker.startSession", () => {
      sessionManager.startSession();
    }),

    cursor.commands.registerCommand("dev-tracker.endSession", () => {
      sessionManager.endSession();
    }),

    // Add AI interaction tracking
    cursor.commands.registerCommand(
      "dev-tracker.trackAIInteraction",
      async (prompt: string, response: string) => {
        await sessionManager.trackAIInteraction(prompt, response);
      }
    )
  );
}

export function deactivate() {
  if (sessionManager) {
    sessionManager.endSession();
  }
}
