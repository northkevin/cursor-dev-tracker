import * as vscode from "vscode";

declare global {
  const cursor: typeof vscode;
  const vscode: typeof vscode;
}

export {};
