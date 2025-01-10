const DEBUG = true;

export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (DEBUG) {
      console.log(`[Dev Tracker Debug] ${message}`, ...args);
    }
  },
  info: (message: string, ...args: any[]) => {
    console.log(`[Dev Tracker] ${message}`, ...args);
  },
  error: (message: string, error?: any) => {
    console.error(`[Dev Tracker Error] ${message}`, error || "");
  },
};
