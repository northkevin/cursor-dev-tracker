"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
class SessionManager {
    constructor(dbManager) {
        this.currentSessionId = null;
        this.dbManager = dbManager;
    }
    async startSession() {
        const session = await this.dbManager.createSession();
        this.currentSessionId = session.id;
        console.log(`Started new session: ${session.id}`);
    }
    async endSession() {
        if (this.currentSessionId) {
            await this.dbManager.endSession(this.currentSessionId);
            this.currentSessionId = null;
        }
    }
    async trackFileChange(event) {
        if (!this.currentSessionId)
            return;
        await this.dbManager.recordFileChange({
            sessionId: this.currentSessionId,
            filePath: event.document.uri.fsPath,
            changeType: "modified",
        });
    }
}
exports.SessionManager = SessionManager;
//# sourceMappingURL=sessionManager.js.map