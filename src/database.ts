import { PrismaClient } from "../prisma/client";
import { GitOperationData } from "./services/gitTracker";
import { BuildData } from "./services/buildTestTracker";
import { TestData } from "./services/buildTestTracker";
import { logger } from "./utils/logger";
import * as path from "path";
import * as fs from "fs";
import { PrismaClientOptions, Sql } from "../prisma/client/runtime/library";

const homeDir = process.env.HOME || process.env.USERPROFILE || "";
const dbPath = path.join(
  homeDir,
  ".cursor",
  "dev-tracker",
  "data",
  "dev-tracker.db"
);

// Ensure the directory exists before setting DATABASE_URL
try {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  console.log("📁 Created database directory at:", path.dirname(dbPath));
} catch (error) {
  console.error("❌ Failed to create database directory:", error);
}

process.env.DATABASE_URL = `file:${dbPath}`;

// Set environment variables for Prisma
process.env.PRISMA_SCHEMA_ENGINE_BINARY = path.join(
  __dirname,
  "../prisma-engines/schema-engine"
);
process.env.PRISMA_QUERY_ENGINE_LIBRARY = path.join(
  __dirname,
  "../prisma-engines/libquery_engine"
);
process.env.PRISMA_SCHEMA_PATH = path.join(
  __dirname,
  "../prisma/schema.prisma"
);

// Single PrismaClient instance for the application
const prisma = new PrismaClient({
  // Explicitly set the schema path
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Add type for transaction
type TransactionClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

export const initialize = async (): Promise<void> => {
  logger.debug("Initializing database connection");
  console.log("🔌 Connecting to database at:", dbPath);
  try {
    await prisma.$connect();
    // Force database creation by executing a query
    await prisma.$executeRaw`SELECT 1`;
    logger.info("Database connection established");
    console.log("✅ Database initialized successfully");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    throw error;
  }
};

export const createSession = async () => {
  logger.debug("Creating new session");
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
  return await prisma.$transaction(async (tx: TransactionClient) => {
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

export const getDayActivities = async (date: string) => {
  const startOfDay = new Date(date);
  const endOfDay = new Date(date);
  endOfDay.setDate(endOfDay.getDate() + 1);

  return await prisma.$transaction([
    prisma.command.findMany({
      where: {
        timestamp: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
      include: {
        gitData: true,
        buildData: true,
        testData: true,
      },
    }),
    prisma.fileChange.findMany({
      where: {
        timestamp: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
    }),
    prisma.aIInteraction.findMany({
      where: {
        timestamp: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
    }),
  ]);
};

export const verifyConnection = async (): Promise<boolean> => {
  try {
    console.log("🔍 Verifying database connection...");
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connection verified");
    return true;
  } catch (error) {
    logger.error("Database verification failed:", error);
    console.error("❌ Database error details:", error);
    return false;
  }
};

export const $executeRaw = async (
  query: TemplateStringsArray | Sql,
  ...values: any[]
) => {
  return await prisma.$executeRaw(query, ...values);
};
