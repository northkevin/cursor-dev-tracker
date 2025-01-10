import { ExtensionContext, TextDocumentChangeEvent } from "cursor-ide";
import * as session from "./sessionManager";
import * as db from "./database";

export async function activate(context: ExtensionContext) {
  // Initialize database
  await db.initialize();

  // Start session tracking
  await session.startSession();

  // Register event listeners
  context.subscriptions.push(
    cursor.workspace.onDidChangeTextDocument(
      (event: TextDocumentChangeEvent) => {
        session.trackFileChange(event);
      }
    ),

    cursor.commands.registerCommand("dev-tracker.startSession", () => {
      session.startSession();
    }),

    cursor.commands.registerCommand("dev-tracker.endSession", () => {
      session.endSession();
    }),

    // Add AI interaction tracking
    cursor.commands.registerCommand(
      "dev-tracker.trackAIInteraction",
      async (prompt: string, response: string) => {
        await session.trackAIInteraction(prompt, response);
      }
    ),

    // Add Git operation tracking
    cursor.commands.registerCommand(
      "dev-tracker.trackGitOperation",
      async (operation: string) => {
        await session.trackGitOperation(operation);
      }
    )
  );

  // Watch for Git operations
  const gitOperations = ["commit", "push", "pull", "merge", "checkout"];
  gitOperations.forEach((operation) => {
    context.subscriptions.push(
      cursor.commands.registerCommand(`git.${operation}`, async () => {
        await session.trackGitOperation(operation);
      })
    );
  });
}

export function deactivate() {
  session.endSession();
}
