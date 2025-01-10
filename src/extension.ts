import * as vscode from "vscode";
import * as session from "./sessionManager";
import * as db from "./database";
import { logger } from "./utils/logger";
import * as history from "./services/historyTracker";
import * as path from "path";

console.log("Dev Tracker: Module loaded"); // This should log even if activation fails

export async function activate(context: vscode.ExtensionContext) {
  // Direct console logs for maximum visibility
  console.log("=".repeat(50));
  console.log("🔥 Dev Tracker Extension - Activation Start");
  console.log("=".repeat(50));

  try {
    console.log("1. Checking workspace...");

    const workspaceFolder = cursor.workspace.workspaceFolders?.[0];
    console.log("2. Workspace folders:", cursor.workspace.workspaceFolders);

    if (!workspaceFolder) {
      console.log("❌ No workspace folder found");
      return;
    }

    const workspaceRoot = workspaceFolder.uri.fsPath;
    console.log("3. Workspace root:", workspaceRoot);

    // Log important paths
    const dbPath = path.join(workspaceRoot, "data/dev-tracker.db");
    const historyPath = path.join(workspaceRoot, ".cursor/dev-history.yaml");

    console.log("4. Paths:", {
      dbPath,
      historyPath,
      extensionPath: __dirname,
    });

    // Initialize and verify database
    await db.initialize();
    console.log("5. Database initialized");

    const isDbReady = await db.verifyConnection();
    console.log("6. Database connection:", isDbReady ? "✅" : "❌");

    // Create initial history entry
    const initialSummary = {
      date: new Date().toISOString().split("T")[0],
      activity: {
        summary: ["Dev Tracker initialized"],
        timeSpent: {},
        mainTopics: [],
      },
      git: {
        commits: 0,
        filesChanged: 0,
        additions: 0,
        deletions: 0,
        branches: [],
        mainOperations: {},
      },
      ai: {
        totalQuestions: 0,
        composerQuestions: 0,
        chatQuestions: 0,
        acceptedSuggestions: 0,
        rejectedSuggestions: 0,
        errorFixRequests: { console: 0, lint: 0, type: 0 },
        topTopics: [],
      },
      development: {
        buildAttempts: 0,
        buildErrors: 0,
        testsRun: 0,
        testsPassed: 0,
        testsFailed: 0,
        averageBuildTime: 0,
      },
      timeTracking: {
        totalTime: 0,
        details: [],
        byCategory: {},
        mostActiveHours: [],
        breaks: [],
      },
    };

    await history.updateHistoryFile(workspaceRoot, initialSummary);
    logger.info("✅ History file created");

    // Register status command
    context.subscriptions.push(
      cursor.commands.registerCommand("dev-tracker.status", async () => {
        const status = {
          dbConnected: await db.verifyConnection(),
          historyExists: await history.verifyHistoryFile(workspaceRoot),
          sessionActive: session.isSessionActive(),
          timestamp: new Date().toISOString(),
        };
        logger.info("📊 Dev Tracker Status:", status);
        return status;
      })
    );

    // Register event listeners
    context.subscriptions.push(
      cursor.workspace.onDidChangeTextDocument(
        (event: vscode.TextDocumentChangeEvent) => {
          console.log("📝 File changed:", event.document.uri.fsPath);
          session.trackFileChange(event);
        }
      ),

      // Git operations
      cursor.commands.registerCommand("git.commit", async () => {
        console.log("🔄 Git commit detected");
        await session.trackGitOperation("commit");
      }),

      cursor.commands.registerCommand("git.push", async () => {
        console.log("⬆️ Git push detected");
        await session.trackGitOperation("push");
      }),

      cursor.commands.registerCommand("git.pull", async () => {
        console.log("⬇️ Git pull detected");
        await session.trackGitOperation("pull");
      })
    );

    // Rest of activation...
    await session.startSession();

    logger.info(
      "✨ Dev Tracker Ready! Type 'dev-tracker.status' to check status"
    );

    console.log("=".repeat(50));
    console.log("🎉 Dev Tracker Extension - Activation Complete");
    console.log("=".repeat(50));
  } catch (error) {
    console.log("❌ Dev Tracker Extension - Activation Failed:", error);
    logger.error("Failed to activate Dev Tracker", error);
  }
}

export function deactivate() {
  logger.info("Deactivating Dev Tracker extension");
  session.endSession();
}
