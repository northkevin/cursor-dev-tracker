import * as db from "../database";
import { exec } from "child_process";
import { promisify } from "util";
import { outputChannel } from "../utils/outputChannel";
import { logger } from "../utils/logger";

const execAsync = promisify(exec);

type GitError = Error & { stderr?: string };

const handleGitError = (error: unknown, operation: string): void => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  outputChannel.log(`❌ Git operation failed: ${operation} - ${errorMessage}`);
  logger.error(`Git operation failed: ${operation}`, error);
};

export interface GitOperationData {
  operation: string;
  branch: string;
  commitHash?: string;
  filesChanged?: string[];
  commitMessage?: string;
  linesChanged?: { added: number; removed: number };
  impact: {
    filesImpact: number;
    complexityScore: number;
    hotspots: string[];
  };
  patterns: {
    timeOfDay: number;
    dayOfWeek: number;
    commitSize: "small" | "medium" | "large";
    batchCommit: boolean;
  };
  context: {
    relatedIssues: string[];
    dependencies: string[];
    testCoverage: {
      filesWithTests: string[];
      testToCodeRatio: number;
    };
  };
  quality: {
    commitMessageQuality: number;
    refactoringType?: string;
    breakingChanges: boolean;
  };
  collaboration: {
    reviewers?: string[];
    pairProgramming?: string;
    branchType: "feature" | "bugfix" | "hotfix" | "release";
  };
}

interface TrackerState {
  sessionId: string | null;
}

const state: TrackerState = {
  sessionId: null,
};

export const setSessionId = (sessionId: string): void => {
  state.sessionId = sessionId;
};

const getCurrentBranch = async (): Promise<string> => {
  try {
    const { stdout } = await execAsync("git rev-parse --abbrev-ref HEAD");
    return stdout.trim();
  } catch (error: unknown) {
    handleGitError(error, "getCurrentBranch");
    return "unknown";
  }
};

const getChangedFiles = async (): Promise<string[]> => {
  try {
    const { stdout } = await execAsync("git diff --name-only");
    return stdout.trim().split("\n").filter(Boolean);
  } catch (error: unknown) {
    handleGitError(error, "getChangedFiles");
    return [];
  }
};

const getLatestCommitHash = async (): Promise<string> => {
  try {
    const { stdout } = await execAsync("git rev-parse HEAD");
    return stdout.trim();
  } catch (error: unknown) {
    handleGitError(error, "getLatestCommitHash");
    return "unknown";
  }
};

const getGitDiff = async (): Promise<{ added: number; removed: number }> => {
  try {
    const { stdout } = await execAsync("git diff --shortstat");
    const match = stdout.match(/(\d+) insertions?.+?(\d+) deletions?/);
    return {
      added: match ? parseInt(match[1]) : 0,
      removed: match ? parseInt(match[2]) : 0,
    };
  } catch (error: unknown) {
    handleGitError(error, "getGitDiff");
    return { added: 0, removed: 0 };
  }
};

const getCommitMessage = async (): Promise<string> => {
  try {
    const { stdout } = await execAsync("git log -1 --pretty=%B");
    return stdout.trim();
  } catch (error: unknown) {
    handleGitError(error, "getCommitMessage");
    return "";
  }
};

const analyzeCommitMessage = (
  message: string
): {
  quality: number;
  type?: string;
  breaking: boolean;
  issues: string[];
} => {
  const conventionalPattern =
    /^(feat|fix|docs|style|refactor|test|chore)(\(.*\))?: (.+)$/;
  const match = message.match(conventionalPattern);
  const issues = [...(message.match(/#\d+/g) || [])];

  return {
    quality: match ? 1 : message.length > 10 ? 0.5 : 0,
    type: match?.[1],
    breaking: message.toLowerCase().includes("breaking change"),
    issues: issues.map((i) => i.substring(1)),
  };
};

const calculateComplexity = async (files: string[]): Promise<number> => {
  try {
    let score = 0;
    for (const file of files) {
      const { stdout } = await execAsync(`git diff --shortstat ${file}`);
      const changes = stdout.match(/(\d+) insertions?.+?(\d+) deletions?/);

      // Weight by file type
      const weight = file.endsWith(".test.ts")
        ? 0.5
        : file.endsWith(".ts")
        ? 1
        : file.endsWith(".json")
        ? 0.3
        : 0.7;

      score += changes
        ? (parseInt(changes[1]) + parseInt(changes[2])) * weight
        : 0;
    }
    outputChannel.log(`📊 Complexity score: ${score.toFixed(1)}`);
    return score;
  } catch (error: unknown) {
    handleGitError(error, "calculateComplexity");
    return 0;
  }
};

const getOperationData = async (
  operation: string
): Promise<Omit<GitOperationData, "operation">> => {
  const branch = await getCurrentBranch();
  const baseData = { branch };

  switch (operation) {
    case "commit": {
      const commitMessage = await getCommitMessage();
      const filesChanged = await getChangedFiles();
      const complexity = await calculateComplexity(filesChanged);
      const messageAnalysis = analyzeCommitMessage(commitMessage);

      return {
        ...baseData,
        filesChanged,
        commitHash: await getLatestCommitHash(),
        commitMessage,
        linesChanged: await getGitDiff(),
        impact: {
          filesImpact: (filesChanged.length / (await getTotalFiles())) * 100,
          complexityScore: complexity,
          hotspots: await getHotspots(filesChanged),
        },
        patterns: {
          timeOfDay: new Date().getHours(),
          dayOfWeek: new Date().getDay(),
          commitSize:
            complexity < 50 ? "small" : complexity < 200 ? "medium" : "large",
          batchCommit: await isPartOfBatch(),
        },
        context: {
          relatedIssues: messageAnalysis.issues,
          dependencies: filesChanged.filter(
            (f) => f.includes("package.json") || f.includes("pnpm-lock.yaml")
          ),
          testCoverage: await analyzeTestCoverage(filesChanged),
        },
        quality: {
          commitMessageQuality: messageAnalysis.quality,
          refactoringType:
            messageAnalysis.type === "refactor"
              ? getRefactoringType(commitMessage)
              : undefined,
          breakingChanges: messageAnalysis.breaking,
        },
        collaboration: {
          pairProgramming: await extractCoAuthors(commitMessage),
          branchType: getBranchType(branch),
        },
      };
    }
    case "push":
    case "pull":
      return {
        ...baseData,
        commitHash: await getLatestCommitHash(),
        commitMessage: await getCommitMessage(),
        impact: {
          filesImpact: 0,
          complexityScore: 0,
          hotspots: [],
        },
        patterns: {
          timeOfDay: new Date().getHours(),
          dayOfWeek: new Date().getDay(),
          commitSize: "small",
          batchCommit: false,
        },
        context: {
          relatedIssues: [],
          dependencies: [],
          testCoverage: {
            filesWithTests: [],
            testToCodeRatio: 0,
          },
        },
        quality: {
          commitMessageQuality: 0,
          breakingChanges: false,
        },
        collaboration: {
          branchType: getBranchType(baseData.branch),
        },
      };
    default:
      return {
        ...baseData,
        impact: {
          filesImpact: 0,
          complexityScore: 0,
          hotspots: [],
        },
        patterns: {
          timeOfDay: new Date().getHours(),
          dayOfWeek: new Date().getDay(),
          commitSize: "small",
          batchCommit: false,
        },
        context: {
          relatedIssues: [],
          dependencies: [],
          testCoverage: {
            filesWithTests: [],
            testToCodeRatio: 0,
          },
        },
        quality: {
          commitMessageQuality: 0,
          breakingChanges: false,
        },
        collaboration: {
          branchType: getBranchType(baseData.branch),
        },
      };
  }
};

export const trackOperation = async (
  sessionId: string,
  operation: string
): Promise<void> => {
  try {
    const operationData = await getOperationData(operation);
    outputChannel.log(
      `📝 Tracking ${operation} operation on branch ${operationData.branch}`
    );

    await db.recordGitOperation({
      sessionId,
      command: `git ${operation}`,
      gitData: {
        operation,
        ...operationData,
      },
    });
  } catch (error: unknown) {
    handleGitError(error, "trackOperation");
  }
};

const getTotalFiles = async (): Promise<number> => {
  try {
    const { stdout } = await execAsync("git ls-files | wc -l");
    outputChannel.log(`📊 Total files in repo: ${stdout.trim()}`);
    return parseInt(stdout.trim());
  } catch (error: unknown) {
    handleGitError(error, "getTotalFiles");
    return 1;
  }
};

const getHotspots = async (currentFiles: string[]): Promise<string[]> => {
  try {
    // Get files with most commits in last 30 days
    const { stdout } = await execAsync(
      'git log --pretty=format: --name-only --since="30 days ago" | sort | uniq -c | sort -rn | head -n 5'
    );
    const hotspots = stdout
      .trim()
      .split("\n")
      .map((line) => line.trim().split(/\s+/)[1])
      .filter(Boolean);

    outputChannel.log(
      `🔥 Detected ${hotspots.length} hotspots: ${hotspots.join(", ")}`
    );

    return [
      ...new Set([
        ...currentFiles.filter((f) => hotspots.includes(f)),
        ...hotspots,
      ]),
    ];
  } catch (error: unknown) {
    handleGitError(error, "getHotspots");
    return [];
  }
};

const isPartOfBatch = async (): Promise<boolean> => {
  try {
    // Check if there were other commits in the last 10 minutes
    const { stdout } = await execAsync(
      'git log --since="10 minutes ago" --pretty=format:"%h"'
    );
    const commitCount = stdout.trim().split("\n").length;
    outputChannel.log(
      `🔄 Batch analysis: ${commitCount} commits in last 10 minutes`
    );
    return commitCount > 1;
  } catch (error: unknown) {
    handleGitError(error, "isPartOfBatch");
    return false;
  }
};

const analyzeTestCoverage = async (
  files: string[]
): Promise<{ filesWithTests: string[]; testToCodeRatio: number }> => {
  try {
    const testFiles = files.filter(
      (f) => f.includes(".test.") || f.includes(".spec.")
    );
    const sourceFiles = files.filter(
      (f) => f.endsWith(".ts") && !f.includes(".test.") && !f.includes(".spec.")
    );

    outputChannel.log(
      `🧪 Analyzing test coverage - Source files: ${sourceFiles.length}, Test files: ${testFiles.length}`
    );

    // Find corresponding test files for changed source files
    const relatedTests = await Promise.all(
      sourceFiles.map(async (file) => {
        const baseFile = file.replace(/\.(ts|js)$/, "");
        const { stdout } = await execAsync(
          `find . -name "${baseFile}.test.*" -o -name "${baseFile}.spec.*"`
        );
        return stdout.trim().split("\n").filter(Boolean);
      })
    );

    const result = {
      filesWithTests: [...new Set([...testFiles, ...relatedTests.flat()])],
      testToCodeRatio: sourceFiles.length
        ? testFiles.length / sourceFiles.length
        : 0,
    };

    outputChannel.log(
      `📊 Test Coverage - Ratio: ${(result.testToCodeRatio * 100).toFixed(1)}%`
    );

    return result;
  } catch (error: unknown) {
    handleGitError(error, "analyzeTestCoverage");
    return { filesWithTests: [], testToCodeRatio: 0 };
  }
};

interface RefactoringPatterns {
  [key: string]: RegExp;
}

const getRefactoringType = (message: string): string | undefined => {
  const refactoringPatterns: RefactoringPatterns = {
    extract: /extract|split|break out/i,
    rename: /rename|move|relocate/i,
    cleanup: /clean|remove|delete unused/i,
    optimize: /optimize|improve|performance/i,
    types: /typing|type safety|typescript/i,
  };

  for (const [type, pattern] of Object.entries(refactoringPatterns)) {
    if (pattern.test(message)) return type;
  }
  return undefined;
};

const extractCoAuthors = async (
  message: string
): Promise<string | undefined> => {
  const coAuthorPattern = /Co-authored-by:\s*([^<]+)/i;
  const match = message.match(coAuthorPattern);
  return match ? match[1].trim() : undefined;
};

const getBranchType = (
  branch: string
): "feature" | "bugfix" | "hotfix" | "release" => {
  if (branch.startsWith("feature/")) return "feature";
  if (branch.startsWith("fix/") || branch.includes("bugfix")) return "bugfix";
  if (branch.startsWith("hotfix/")) return "hotfix";
  if (branch.startsWith("release/")) return "release";
  return "feature"; // Default to feature for other patterns
};
