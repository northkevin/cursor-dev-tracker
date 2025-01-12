import { logger } from "../utils/logger";
import * as yaml from "yaml";
import { promises as fs } from "fs";
import * as path from "path";

interface DailySummary {
  date: string;
  activity: {
    summary: string[];
    timeSpent: Record<string, number>;
    mainTopics: string[];
  };
  aiInteractions: Array<{
    timestamp: Date;
    success: boolean;
    duration: number;
    metrics: {
      promptLength: number;
      responseLength: number;
      codeBlockCount: number;
      fileEditCount: number;
      categories: string[];
      languages: string[];
      sentiment: "positive" | "negative" | "neutral";
      hasError: boolean;
    };
  }>;
  timeTracking: {
    totalTime: number;
    mostActiveHours: number[];
    breaks: Array<{ start: Date; end: Date }>;
  };
  ai: {
    totalQuestions: number;
    composerQuestions: number;
    chatQuestions: number;
  };
}

const generateBrainUpgradePost = (summary: DailySummary): string => {
  const sections: string[] = [];
  const date = new Date(summary.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Header
  sections.push(`# Brain Upgrade - ${date}\n`);

  // Time Summary
  const hours = Math.floor(summary.timeTracking.totalTime / 60);
  const minutes = Math.round(summary.timeTracking.totalTime % 60);
  sections.push(`## Time Investment`);
  sections.push(`Total Focus Time: ${hours}h ${minutes}m`);

  // Development Activity
  if (summary.ai.totalQuestions > 0) {
    sections.push("\n## AI Collaboration");
    sections.push(`- Total AI interactions: ${summary.ai.totalQuestions}`);
  }

  // Time Patterns
  if (summary.timeTracking.mostActiveHours.length > 0) {
    sections.push("\n## Time Patterns");
    const activeHours = summary.timeTracking.mostActiveHours
      .map((h) => `${h}:00`)
      .join(", ");
    sections.push(`- Peak productivity hours: ${activeHours}`);
    sections.push(`- Number of breaks: ${summary.timeTracking.breaks.length}`);
  }

  // AI Interaction Analysis
  if (summary.ai.totalQuestions > 0) {
    sections.push("\n## 🤖 AI Collaboration Insights");

    // Time-based effectiveness analysis
    const hourlyStats = summary.aiInteractions.reduce((acc, interaction) => {
      const hour = new Date(interaction.timestamp).getHours();
      if (!acc[hour]) {
        acc[hour] = { total: 0, success: 0 };
      }
      acc[hour].total++;
      if (interaction.success) acc[hour].success++;
      return acc;
    }, {} as Record<number, { total: number; success: number }>);

    // Language success rates
    const languageSuccess = summary.aiInteractions.reduce(
      (acc, interaction) => {
        interaction.metrics.languages.forEach((lang) => {
          if (!acc[lang]) {
            acc[lang] = { total: 0, success: 0 };
          }
          acc[lang].total++;
          if (interaction.success) acc[lang].success++;
        });
        return acc;
      },
      {} as Record<string, { total: number; success: number }>
    );

    // Categorize interactions
    const categoryStats = summary.aiInteractions.reduce((acc, interaction) => {
      interaction.metrics.categories.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    // Language usage
    const languageStats = summary.aiInteractions.reduce((acc, interaction) => {
      interaction.metrics.languages.forEach((lang) => {
        acc[lang] = (acc[lang] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    // Success metrics
    const successRate =
      (summary.aiInteractions.filter((i) => i.success).length /
        summary.aiInteractions.length) *
      100;

    // Sentiment Analysis
    const sentimentCounts = summary.aiInteractions.reduce(
      (acc, interaction) => {
        acc[interaction.metrics.sentiment]++;
        return acc;
      },
      { positive: 0, negative: 0, neutral: 0 } as Record<string, number>
    );

    // Code Modification Analysis
    const codeStats = {
      totalCodeBlocks: summary.aiInteractions.reduce(
        (sum, i) => sum + i.metrics.codeBlockCount,
        0
      ),
      totalFileEdits: summary.aiInteractions.reduce(
        (sum, i) => sum + i.metrics.fileEditCount,
        0
      ),
    };

    // Error pattern analysis
    const errorPatterns = summary.aiInteractions.reduce((acc, interaction) => {
      if (interaction.metrics.hasError) {
        const hour = new Date(interaction.timestamp).getHours();
        interaction.metrics.languages.forEach((lang) => {
          const key = `${lang}_${hour}`;
          acc[key] = (acc[key] || 0) + 1;
        });
      }
      return acc;
    }, {} as Record<string, number>);

    // Complexity trends
    const complexityMetrics = summary.aiInteractions.map((interaction) => ({
      hour: new Date(interaction.timestamp).getHours(),
      complexity:
        interaction.metrics.codeBlockCount +
        interaction.metrics.fileEditCount +
        interaction.metrics.promptLength / 100, // Normalized length
      success: interaction.success,
    }));

    // Correlation analysis
    const correlationStats = {
      lowComplexity: {
        total: 0,
        success: 0,
      },
      mediumComplexity: {
        total: 0,
        success: 0,
      },
      highComplexity: {
        total: 0,
        success: 0,
      },
    };

    // Calculate complexity thresholds
    const complexities = complexityMetrics.map((m) => m.complexity);
    const medianComplexity = complexities.sort((a, b) => a - b)[
      Math.floor(complexities.length / 2)
    ];
    const highThreshold = medianComplexity * 1.5;

    // Group by complexity level
    complexityMetrics.forEach(({ complexity, success }) => {
      if (complexity > highThreshold) {
        correlationStats.highComplexity.total++;
        if (success) correlationStats.highComplexity.success++;
      } else if (complexity > medianComplexity) {
        correlationStats.mediumComplexity.total++;
        if (success) correlationStats.mediumComplexity.success++;
      } else {
        correlationStats.lowComplexity.total++;
        if (success) correlationStats.lowComplexity.success++;
      }
    });

    // Group modifications by hour
    const hourlyModifications = summary.aiInteractions.reduce(
      (acc, interaction) => {
        const hour = new Date(interaction.timestamp).getHours();
        if (!acc[hour]) {
          acc[hour] = { edits: 0, codeBlocks: 0 };
        }
        acc[hour].edits += interaction.metrics.fileEditCount;
        acc[hour].codeBlocks += interaction.metrics.codeBlockCount;
        return acc;
      },
      {} as Record<number, { edits: number; codeBlocks: number }>
    );

    sections.push(
      `- Total AI interactions: ${summary.ai.totalQuestions}`,
      `- Success rate: ${successRate.toFixed(1)}%`,
      `- Average response time: ${(
        summary.aiInteractions.reduce((sum, i) => sum + i.duration, 0) /
        summary.aiInteractions.length
      ).toFixed(1)}s`,
      `\n### Code Changes`,
      `- Total code blocks: ${codeStats.totalCodeBlocks}`,
      `- File edits suggested: ${codeStats.totalFileEdits}`,
      `- Edits per interaction: ${(
        codeStats.totalFileEdits / summary.aiInteractions.length
      ).toFixed(1)}`,
      `\n### Interaction Quality`,
      `- Positive responses: ${sentimentCounts.positive}`,
      `- Neutral responses: ${sentimentCounts.neutral}`,
      `- Issues/errors: ${sentimentCounts.negative}`,
      "\n### Query Categories",
      ...Object.entries(categoryStats)
        .sort(([, a], [, b]) => b - a)
        .map(([cat, count]) => `- ${cat}: ${count}`),
      "\n### Languages Used",
      ...Object.entries(languageStats)
        .sort(([, a], [, b]) => b - a)
        .map(([lang, count]) => `- ${lang}: ${count} snippets`),
      "\n### Time-Based Effectiveness",
      ...Object.entries(hourlyStats)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(
          ([hour, stats]) =>
            `- ${hour}:00 - Success rate: ${(
              (stats.success / stats.total) *
              100
            ).toFixed(1)}% (${stats.total} interactions)`
        ),
      "\n### Language-Specific Success Rates",
      ...Object.entries(languageSuccess)
        .sort(([, a], [, b]) => b.total - a.total)
        .map(
          ([lang, stats]) =>
            `- ${lang}: ${((stats.success / stats.total) * 100).toFixed(1)}% (${
              stats.total
            } uses)`
        ),
      "\n### Error Patterns",
      ...Object.entries(errorPatterns)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([key, count]) => {
          const [lang, hour] = key.split("_");
          return `- ${lang} at ${hour}:00: ${count} errors`;
        }),
      "\n### Complexity Trends",
      ...Object.entries(
        complexityMetrics.reduce((acc, { hour, complexity }) => {
          acc[hour] = (acc[hour] || 0) + complexity;
          return acc;
        }, {} as Record<number, number>)
      )
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(
          ([hour, total]) =>
            `- ${hour}:00 - Complexity score: ${total.toFixed(1)}`
        ),
      "\n### Code Modification Patterns",
      ...Object.entries(hourlyModifications)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(
          ([hour, stats]) =>
            `- ${hour}:00 - ${stats.edits} edits, ${stats.codeBlocks} code blocks`
        ),
      "\n### Complexity vs Success Rate",
      `- Low complexity: ${(
        (correlationStats.lowComplexity.success /
          correlationStats.lowComplexity.total) *
        100
      ).toFixed(1)}% success`,
      `- Medium complexity: ${(
        (correlationStats.mediumComplexity.success /
          correlationStats.mediumComplexity.total) *
        100
      ).toFixed(1)}% success`,
      `- High complexity: ${(
        (correlationStats.highComplexity.success /
          correlationStats.highComplexity.total) *
        100
      ).toFixed(1)}% success`
    );

    // Add effectiveness tips
    const tips: string[] = [];

    // Time-based tips
    const bestHour = Object.entries(hourlyStats).sort(
      ([, a], [, b]) => b.success / b.total - a.success / a.total
    )[0];
    if (bestHour) {
      tips.push(
        `Most effective coding time is around ${bestHour[0]}:00 (${(
          (bestHour[1].success / bestHour[1].total) *
          100
        ).toFixed(1)}% success rate)`
      );
    }

    // Language-specific tips
    const strugglingLangs = Object.entries(languageSuccess)
      .filter(
        ([, stats]) => stats.total >= 3 && stats.success / stats.total < 0.5
      )
      .map(([lang]) => lang);
    if (strugglingLangs.length > 0) {
      tips.push(
        `Consider reviewing documentation for: ${strugglingLangs.join(", ")}`
      );
    }

    if (sentimentCounts.negative > sentimentCounts.positive) {
      tips.push("Consider breaking down complex questions into smaller parts");
    }
    if (codeStats.totalFileEdits / summary.aiInteractions.length > 3) {
      tips.push(
        "Large number of file edits - consider focused, single-file changes"
      );
    }

    if (tips.length > 0) {
      sections.push(
        "\n### 💡 Optimization Tips",
        ...tips.map((tip) => `- ${tip}`)
      );
    }

    // Add more targeted tips based on new metrics
    if (Object.keys(errorPatterns).length > 0) {
      const [mostErrorKey] = Object.entries(errorPatterns).sort(
        ([, a], [, b]) => b - a
      )[0];
      const [errorLang, errorHour] = mostErrorKey.split("_");
      tips.push(
        `Consider extra review for ${errorLang} code during ${errorHour}:00`
      );
    }

    // Identify optimal complexity handling times
    const avgComplexity =
      complexityMetrics.reduce((sum, { complexity }) => sum + complexity, 0) /
      complexityMetrics.length;
    const highComplexitySuccess = complexityMetrics.filter(
      ({ complexity }) => complexity > avgComplexity
    ).length;
    if (highComplexitySuccess < complexityMetrics.length / 2) {
      tips.push(
        "Consider breaking down complex tasks into smaller, focused sessions"
      );
    }

    // Add correlation-based tips
    if (
      correlationStats.lowComplexity.success /
        correlationStats.lowComplexity.total >
      (correlationStats.highComplexity.success /
        correlationStats.highComplexity.total) *
        2
    ) {
      tips.push(
        "Success rate drops significantly with complexity - consider breaking down complex tasks"
      );
    }
  }

  return sections.join("\n");
};

export const generatePostForDate = async (
  workspaceRoot: string,
  date: string
): Promise<string> => {
  const historyPath = path.join(workspaceRoot, ".cursor", "dev-history.yaml");

  try {
    const content = await fs.readFile(historyPath, "utf8");
    const history = yaml.parse(content);

    if (!history[date]) {
      return `No data found for ${date}`;
    }

    return generateBrainUpgradePost(history[date]);
  } catch (error) {
    logger.error("Failed to generate post:", error);
    return "Failed to generate brain upgrade post";
  }
};
