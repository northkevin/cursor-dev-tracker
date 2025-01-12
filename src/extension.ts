import * as vscode from "vscode";
import * as session from "./sessionManager";
import * as db from "./database";
import { logger } from "./utils/logger";
import * as history from "./services/historyTracker";
import * as path from "path";
import * as fs from "fs";
import * as postGenerator from "./services/postGenerator";

// Use either cursor or vscode API
const api = typeof cursor !== "undefined" ? cursor : vscode;

console.log("Dev Tracker: Module loaded"); // This should log even if activation fails

export async function activate(context: vscode.ExtensionContext) {
  // Direct console logs for maximum visibility
  console.log("=".repeat(50));
  console.log("🔥 Dev Tracker Extension - Activation Start");
  console.log("=".repeat(50));

  // Force immediate console flush
  console.debug("Debug console test");
  console.warn("Warning console test");

  try {
    console.log("\n\n");
    console.log("🔍 Dev Tracker Extension Loading");
    console.log("================================");
    console.log("Extension Path:", __dirname);
    console.log("1. Checking workspace...");

    console.log("🔍 Extension path:", context.extensionPath);
    console.log("🔍 Workspace folders:", api.workspace.workspaceFolders);

    const workspaceFolder = api.workspace.workspaceFolders?.[0];
    console.log("2. Workspace folders:", api.workspace.workspaceFolders);

    if (!workspaceFolder) {
      console.log("❌ No workspace folder found");
      return;
    }

    const workspaceRoot = workspaceFolder.uri.fsPath;
    console.log("3. Workspace root:", workspaceRoot);

    // Log important paths
    const homeDir = process.env.HOME || process.env.USERPROFILE || "";
    const dbPath = path.join(
      homeDir,
      ".cursor",
      "dev-tracker",
      "data",
      "dev-tracker.db"
    );
    const historyPath = path.join(workspaceRoot, ".cursor/dev-history.yaml");

    console.log("🔍 Data Paths:");
    console.log("- Database:", dbPath);
    console.log("- History:", historyPath);
    console.log("- Workspace Root:", workspaceRoot);

    // Ensure data directory exists
    await fs.promises.mkdir(
      path.join(homeDir, ".cursor", "dev-tracker", "data"),
      { recursive: true }
    );
    console.log("📁 Created data directory at:", path.dirname(dbPath));

    // Verify the directories were created
    try {
      const dbStat = await fs.promises.stat(path.dirname(dbPath));
      const historyStat = await fs.promises.stat(path.dirname(historyPath));
      console.log("📂 Directory Status:");
      console.log("- Data dir exists:", dbStat.isDirectory());
      console.log("- History dir exists:", historyStat.isDirectory());
    } catch (error) {
      console.error("❌ Error checking directories:", error);
    }

    console.log("4. Paths:", {
      dbPath,
      historyPath,
      extensionPath: __dirname,
    });

    // Initialize and verify database
    await db.initialize(context);
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
      api.commands.registerCommand("dev-tracker.status", async () => {
        console.log("\n=== Dev Tracker Status Check ===");
        const status = {
          dbConnected: await db.verifyConnection(),
          historyExists: await history.verifyHistoryFile(workspaceRoot),
          sessionActive: session.isSessionActive(),
          timestamp: new Date().toISOString(),
        };
        console.log("📊 Status Details:");
        console.log("- Database Connected:", status.dbConnected ? "✅" : "❌");
        console.log(
          "- History File Exists:",
          status.historyExists ? "✅" : "❌"
        );
        console.log("- Session Active:", status.sessionActive ? "✅" : "❌");
        console.log("- Timestamp:", status.timestamp);
        console.log("===============================\n");

        logger.info("📊 Dev Tracker Status:", status);

        // Show status in UI with better formatting
        const statusMessage = [
          `Database: ${
            status.dbConnected ? "Connected ✅" : "Disconnected ❌"
          }`,
          `History: ${status.historyExists ? "Found ✅" : "Missing ❌"}`,
          `Session: ${status.sessionActive ? "Active ✅" : "Inactive ❌"}`,
        ].join("\n");

        api.window.showInformationMessage(
          `Dev Tracker Status:\n${statusMessage}`
        );
        return status;
      }),
      // Add brain upgrade post command
      api.commands.registerCommand("dev-tracker.showPost", async () => {
        const workspaceFolder = api.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
          api.window.showErrorMessage("No workspace folder found");
          return;
        }

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split("T")[0];

        const post = await postGenerator.generatePostForDate(
          workspaceFolder.uri.fsPath,
          today
        );

        // Create and show the post in a new editor
        const doc = await api.workspace.openTextDocument({
          content: post,
          language: "markdown",
        });
        await api.window.showTextDocument(doc, { preview: false });
      }),
      // Add validation command
      api.commands.registerCommand("dev-tracker.validate", async () => {
        console.log("\n=== Dev Tracker Validation ===");

        // Test storage
        const sessions = await globalState.get("sessions", []);
        console.log("📊 Storage Test:");
        console.log("- Sessions found:", sessions.length);
        console.log("- Storage keys:", await globalState.keys());

        // Test file tracking
        const testFile = await api.workspace.openTextDocument({ content: "test" });
        await session.trackFileChange({ document: testFile });
        console.log("📝 File Tracking Test Complete");

        // Test AI tracking
        await session.trackAIInteraction("test prompt", "test response");
        console.log("🤖 AI Tracking Test Complete");

        console.log("===============================\n");
      })
    );

    // Register event listeners
    context.subscriptions.push(
      api.workspace.onDidChangeTextDocument(
        (event: vscode.TextDocumentChangeEvent) => {
          console.log("📝 File changed:", event.document.uri.fsPath);
          session.trackFileChange(event);
        }
      ),

      // Watch for Git changes using file system events
      api.workspace.onDidSaveTextDocument(async (document: any) => {
        if (document.uri.path.includes(".git")) {
          // Check if it's a git-related file
          const gitPath = document.uri.path;
          console.log("🔄 Git file changed:", gitPath);

          if (gitPath.includes("/COMMIT_EDITMSG")) {
            console.log("🔄 Git commit detected");
            await session.trackGitOperation("commit");
          } else if (gitPath.includes("/FETCH_HEAD")) {
            console.log("⬇️ Git pull/fetch detected");
            await session.trackGitOperation("pull");
          } else if (gitPath.includes("/ORIG_HEAD")) {
            console.log("⬆️ Git push detected");
            await session.trackGitOperation("push");
          }
        }
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
    console.error("❌ Dev Tracker Extension - Activation Failed:", error);
    api.window.showErrorMessage(`Dev Tracker failed to activate: ${error}`);
    logger.error("Failed to activate Dev Tracker", error);
    throw error; // Re-throw to ensure VS Code sees the activation failure
  }
}

export function deactivate() {
  logger.info("Deactivating Dev Tracker extension");
  session.endSession();
}
