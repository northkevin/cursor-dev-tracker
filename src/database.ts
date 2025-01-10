import { PrismaClient } from "@prisma/client";
import { GitOperationData } from "./services/gitTracker";
import { BuildData } from "./services/buildTestTracker";
import { TestData } from "./services/buildTestTracker";

// Single PrismaClient instance for the application
const prisma = new PrismaClient();

export const initialize = async (): Promise<void> => {
  await prisma.$connect();
};

export const createSession = async () => {
  return await prisma.session.create({
    data: {},
  });
};

export const endSession = async (sessionId: string) => {
  return await prisma.session.update({
    where: { id: sessionId },
    data: { endTime: new Date() },
  });
};

export const recordFileChange = async (data: {
  sessionId: string;
  filePath: string;
  changeType: string;
}) => {
  return await prisma.fileChange.create({
    data,
  });
};

export const recordAIInteraction = async (data: {
  sessionId: string;
  prompt: string;
  response: string;
}) => {
  return await prisma.aIInteraction.create({
    data,
  });
};

export const recordGitOperation = async (data: {
  sessionId: string;
  command: string;
  gitData: GitOperationData;
}) => {
  return await prisma.$transaction(async (tx) => {
    const command = await tx.command.create({
      data: {
        sessionId: data.sessionId,
        command: data.command,
        type: "git",
      },
    });

    await tx.gitOperation.create({
      data: {
        commandId: command.id,
        operation: data.gitData.operation,
        branch: data.gitData.branch,
        commitHash: data.gitData.commitHash,
        filesChanged: data.gitData.filesChanged
          ? JSON.stringify(data.gitData.filesChanged)
          : null,
      },
    });

    return command;
  });
};

export const recordBuildOperation = async (data: {
  sessionId: string;
  command: string;
  buildData: BuildData;
}) => {
  return await prisma.$transaction(async (tx) => {
    const command = await tx.command.create({
      data: {
        sessionId: data.sessionId,
        command: data.command,
        type: "build",
      },
    });

    await tx.buildOperation.create({
      data: {
        commandId: command.id,
        environment: data.buildData.environment,
        framework: data.buildData.framework,
        success: data.buildData.success,
        duration: data.buildData.duration,
        errors: data.buildData.errors
          ? JSON.stringify(data.buildData.errors)
          : null,
        warnings: data.buildData.warnings
          ? JSON.stringify(data.buildData.warnings)
          : null,
        outputLog: data.buildData.outputLog,
      },
    });

    return command;
  });
};

export const recordTestOperation = async (data: {
  sessionId: string;
  command: string;
  testData: TestData;
}) => {
  return await prisma.$transaction(async (tx) => {
    const command = await tx.command.create({
      data: {
        sessionId: data.sessionId,
        command: data.command,
        type: "test",
      },
    });

    await tx.testOperation.create({
      data: {
        commandId: command.id,
        framework: data.testData.framework,
        success: data.testData.success,
        duration: data.testData.duration,
        totalTests: data.testData.totalTests,
        passedTests: data.testData.passedTests,
        failedTests: data.testData.failedTests,
        skippedTests: data.testData.skippedTests,
        errors: data.testData.errors
          ? JSON.stringify(data.testData.errors)
          : null,
        outputLog: data.testData.outputLog,
      },
    });

    return command;
  });
};
