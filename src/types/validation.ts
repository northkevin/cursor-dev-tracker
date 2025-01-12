export interface ValidationResult {
  type: "storage" | "ai" | "git" | "file" | "build" | "test";
  success: boolean;
  data?: Record<string, unknown>;
  duration?: number;
  error?: string;
}

export interface TrackerValidation {
  name: string;
  run: () => Promise<ValidationResult>;
}
