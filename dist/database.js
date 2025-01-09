"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseManager = void 0;
const client_1 = require("@prisma/client");
class DatabaseManager {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async initialize() {
        await this.prisma.$connect();
    }
    async createSession() {
        return await this.prisma.session.create({
            data: {},
        });
    }
    async endSession(sessionId) {
        return await this.prisma.session.update({
            where: { id: sessionId },
            data: { endTime: new Date() },
        });
    }
    async recordFileChange(data) {
        return await this.prisma.fileChange.create({
            data,
        });
    }
}
exports.DatabaseManager = DatabaseManager;
//# sourceMappingURL=database.js.map