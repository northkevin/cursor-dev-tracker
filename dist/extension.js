"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const sessionManager_1 = require("./sessionManager");
const database_1 = require("./database");
let sessionManager;
async function activate(context) {
    // Initialize database
    const dbManager = new database_1.DatabaseManager();
    await dbManager.initialize();
    // Start session tracking
    sessionManager = new sessionManager_1.SessionManager(dbManager);
    await sessionManager.startSession();
    // Register event listeners
    context.subscriptions.push(cursor.workspace.onDidChangeTextDocument((event) => {
        sessionManager.trackFileChange(event);
    }), cursor.commands.registerCommand("dev-tracker.startSession", () => {
        sessionManager.startSession();
    }), cursor.commands.registerCommand("dev-tracker.endSession", () => {
        sessionManager.endSession();
    }));
}
function deactivate() {
    if (sessionManager) {
        sessionManager.endSession();
    }
}
//# sourceMappingURL=extension.js.map