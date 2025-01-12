import { outputChannel } from "./outputChannel";
const DEBUG = true;

export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (DEBUG) {
      outputChannel.log(`[Debug] ${message} ${args.join(" ")}`);
    }
  },
  info: (message: string, ...args: any[]) => {
    outputChannel.log(`[Info] ${message} ${args.join(" ")}`);
  },
  error: (message: string, error?: any) => {
    outputChannel.log(
      `[Error] ${message} ${error ? JSON.stringify(error) : ""}`
    );
  },
};
