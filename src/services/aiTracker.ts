import * as db from "../database";
import { outputChannel } from "../utils/outputChannel";

interface TrackerState {
  sessionId: string | null;
  startTime: number | null;
}

const state: TrackerState = {
  sessionId: null,
  startTime: null,
};

export const setSessionId = (sessionId: string): void => {
  state.sessionId = sessionId;
};

export const trackInteraction = async (
  sessionId: string,
  prompt: string,
  response: string,
  type: "chat" | "composer" | "inline" = "chat",
  options: {
    success: boolean;
    duration: number;
  }
): Promise<void> => {
  state.startTime = Date.now();

  // Track the interaction with timing and success detection
  await db.recordAIInteraction({
    sessionId,
    prompt,
    response,
    type,
    success: options.success,
    duration: options.duration,
  });
};

export interface AIInteractionMetrics {
  promptLength: number;
  responseLength: number;
  codeBlockCount: number;
  fileEditCount: number;
  categories: string[];
  languages: string[];
  sentiment: "positive" | "negative" | "neutral";
  hasError: boolean;
}

export interface AIInteractionSummary {
  type: "chat" | "composer" | "inline";
  timestamp: Date;
  duration: number;
  promptSummary: string;
  metrics: AIInteractionMetrics;
  effectiveness: {
    acceptedChanges: boolean;
    iterationCount: number;
    timeToImplement: number;
  };
}

export const analyzeInteraction = async (
  prompt: string,
  response: string
): Promise<AIInteractionMetrics> => {
  outputChannel.log("Analyzing AI interaction...");
  return {
    promptLength: prompt.length,
    responseLength: response.length,
    codeBlockCount: (response.match(/```/g) || []).length / 2,
    fileEditCount: (response.match(/```\w+:.+/g) || []).length,
    categories: detectCategories(prompt),
    languages: detectLanguages(response),
    sentiment: detectSentiment(response),
    hasError:
      response.toLowerCase().includes("error") ||
      response.toLowerCase().includes("failed"),
  };
};

const detectCategories = (prompt: string): string[] => {
  const categories = [];
  if (prompt.match(/\b(fix|error|bug|issue|problem)\b/i))
    categories.push("bug-fix");
  if (prompt.match(/\b(refactor|improve|clean|optimize)\b/i))
    categories.push("refactor");
  if (prompt.match(/\b(add|create|implement|new)\b/i))
    categories.push("feature");
  if (prompt.match(/\b(explain|how|what|why|document)\b/i))
    categories.push("docs");
  return categories;
};

const detectLanguages = (response: string): string[] => {
  const languageMatches = response.match(/```(\w+)(?::|[^:])/g) || [];
  return [
    ...new Set(
      languageMatches.map((m) => m.replace(/```/, "").replace(/:.*/, ""))
    ),
  ];
};

const detectSentiment = (
  response: string
): "positive" | "negative" | "neutral" => {
  const positive = (
    response.match(/✅|success|completed|fixed|improved/g) || []
  ).length;
  const negative = (response.match(/❌|error|failed|issue|problem/g) || [])
    .length;
  return positive > negative
    ? "positive"
    : negative > positive
    ? "negative"
    : "neutral";
};
