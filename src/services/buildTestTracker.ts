import * as db from "../database";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface BuildData {
  environment: string;
  framework: string;
  success: boolean;
  duration: number;
  errors?: string[];
  warnings?: string[];
  outputLog?: string;
}

export interface TestData {
  framework: string;
  success: boolean;
  duration: number;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  errors?: string[];
  outputLog?: string;
}

interface TrackerState {
  sessionId: string | null;
  buildStartTime: number | null;
}

const state: TrackerState = {
  sessionId: null,
  buildStartTime: null,
};

export const setSessionId = (sessionId: string): void => {
  state.sessionId = sessionId;
};

/**
 * Start tracking a build or test operation
 * @param type - "build" or "test"
 */
export const startOperation = (type: "build" | "test"): void => {
  state.buildStartTime = Date.now();
};

/**
 * Parse Next.js development server output
 * This is specifically for Next.js but can be extended for other frameworks
 */
const parseNextOutput = (
  output: string
): {
  success: boolean;
  errors: string[];
  warnings: string[];
} => {
  const errors: string[] = [];
  const warnings: string[] = [];
  let success = true;

  // Next.js specific error patterns
  const lines = output.split("\n");
  for (const line of lines) {
    if (line.includes("error")) {
      errors.push(line.trim());
      success = false;
    } else if (line.includes("warn")) {
      warnings.push(line.trim());
    }
  }

  return { success, errors, warnings };
};

/**
 * Parse test output
 * Currently supports Jest-like output, can be extended for other test runners
 */
const parseTestOutput = (
  output: string
): {
  success: boolean;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  errors: string[];
} => {
  const errors: string[] = [];
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  let skippedTests = 0;

  const lines = output.split("\n");
  for (const line of lines) {
    // This is a basic example - extend based on your test runner's output format
    if (line.includes("Tests:")) {
      const match = line.match(/(\d+) passed, (\d+) failed, (\d+) skipped/);
      if (match) {
        passedTests = parseInt(match[1]);
        failedTests = parseInt(match[2]);
        skippedTests = parseInt(match[3]);
        totalTests = passedTests + failedTests + skippedTests;
      }
    }
    if (line.includes("FAIL")) {
      errors.push(line.trim());
    }
  }

  return {
    success: failedTests === 0,
    totalTests,
    passedTests,
    failedTests,
    skippedTests,
    errors,
  };
};

/**
 * Track build operation completion
 * @param output - Console output from the build process
 * @param framework - Build framework used (e.g., "next", "vite")
 * @param environment - Build environment (e.g., "development", "production")
 */
export const trackBuildComplete = async (
  output: string,
  framework: string = "next",
  environment: string = "development"
): Promise<void> => {
  if (!state.sessionId || !state.buildStartTime) {
    console.warn("No active session or build start time for build tracking");
    return;
  }

  const duration = Date.now() - state.buildStartTime;
  const { success, errors, warnings } = parseNextOutput(output);

  const buildData: BuildData = {
    environment,
    framework,
    success,
    duration,
    errors,
    warnings,
    outputLog: output,
  };

  await db.recordBuildOperation({
    sessionId: state.sessionId,
    command: `${framework} build`,
    buildData,
  });

  state.buildStartTime = null;
};

/**
 * Track test operation completion
 * @param output - Console output from the test process
 * @param framework - Test framework used (e.g., "jest", "vitest")
 */
export const trackTestComplete = async (
  output: string,
  framework: string = "jest"
): Promise<void> => {
  if (!state.sessionId || !state.buildStartTime) {
    console.warn("No active session or build start time for test tracking");
    return;
  }

  const duration = Date.now() - state.buildStartTime;
  const testResults = parseTestOutput(output);

  const testData: TestData = {
    framework,
    duration,
    ...testResults,
    outputLog: output,
  };

  await db.recordTestOperation({
    sessionId: state.sessionId,
    command: `${framework} test`,
    testData,
  });

  state.buildStartTime = null;
};
