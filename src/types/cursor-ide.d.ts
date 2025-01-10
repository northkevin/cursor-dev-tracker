declare module "cursor-ide" {
  export interface ExtensionContext {
    subscriptions: { dispose(): any }[];
  }

  export interface TextDocument {
    uri: {
      fsPath: string;
    };
  }

  export interface TextDocumentChangeEvent {
    document: TextDocument;
  }

  export interface Workspace {
    onDidChangeTextDocument: (
      callback: (event: TextDocumentChangeEvent) => void
    ) => { dispose(): void };
  }

  export interface Commands {
    registerCommand: (
      command: string,
      callback: (...args: any[]) => void
    ) => { dispose(): void };
  }

  export interface CursorAPI {
    workspace: Workspace;
    commands: Commands;
  }

  export const cursor: CursorAPI;
}

// Make cursor available globally
declare global {
  const cursor: import("cursor-ide").CursorAPI;
}

export {};
