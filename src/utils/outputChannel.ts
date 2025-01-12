import * as vscode from "vscode";

class OutputChannelManager {
  private static instance: OutputChannelManager;
  private channel: vscode.OutputChannel;

  private constructor() {
    this.channel = vscode.window.createOutputChannel(
      "Cursor Dev Tracker",
      "log"
    );
  }

  public static getInstance(): OutputChannelManager {
    if (!OutputChannelManager.instance) {
      OutputChannelManager.instance = new OutputChannelManager();
    }
    return OutputChannelManager.instance;
  }

  public getChannel(): vscode.OutputChannel {
    return this.channel;
  }

  public log(message: string): void {
    this.channel.appendLine(`[${new Date().toISOString()}] ${message}`);
  }

  public show(): void {
    this.channel.show(true);
  }
}

export const outputChannel = OutputChannelManager.getInstance();
