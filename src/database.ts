import { PrismaClient } from "@prisma/client";

export class DatabaseManager {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async initialize(): Promise<void> {
    await this.prisma.$connect();
  }

  async createSession() {
    return await this.prisma.session.create({
      data: {},
    });
  }

  async endSession(sessionId: string) {
    return await this.prisma.session.update({
      where: { id: sessionId },
      data: { endTime: new Date() },
    });
  }

  async recordFileChange(data: {
    sessionId: string;
    filePath: string;
    changeType: string;
  }) {
    return await this.prisma.fileChange.create({
      data,
    });
  }

  async recordAIInteraction(data: {
    sessionId: string;
    prompt: string;
    response: string;
  }) {
    return await this.prisma.aIInteraction.create({
      data,
    });
  }
}
