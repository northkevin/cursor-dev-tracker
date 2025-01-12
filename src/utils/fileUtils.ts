import * as vscode from "vscode";
import * as path from "path";
import { workspace } from "vscode";
import { outputChannel } from "./outputChannel";

// Common binary file extensions to ignore
const BINARY_EXTENSIONS = new Set([
  ".exe",
  ".dll",
  ".so",
  ".dylib",
  ".zip",
  ".tar",
  ".gz",
  ".rar",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".ico",
  ".pdf",
  ".doc",
  ".docx",
]);

// Cache for workspace files
let workspaceFilesCache: Set<string> | null = null;
let lastCacheUpdate = 0;
const CACHE_TTL = 30000; // 30 seconds

export async function isProjectFile(filePath: string): Promise<boolean> {
  try {
    // Quick checks first
    if (!filePath) return false;

    // Check file extension
    const ext = path.extname(filePath).toLowerCase();
    if (BINARY_EXTENSIONS.has(ext)) return false;

    // Get workspace folder containing this file
    const workspaceFolder = workspace.getWorkspaceFolder(
      vscode.Uri.file(filePath)
    );
    if (!workspaceFolder) return false;

    // Refresh cache if needed
    if (!workspaceFilesCache || Date.now() - lastCacheUpdate > CACHE_TTL) {
      const files = await workspace.findFiles(
        // Include patterns - adjust based on your needs
        "{**/*.*}",
        // Exclude patterns - uses .gitignore and common excludes
        "{**/.git/**,**/node_modules/**,**/dist/**,**/build/**,**/.cursor/**}"
      );

      workspaceFilesCache = new Set(files.map((f) => f.fsPath));
      lastCacheUpdate = Date.now();
      outputChannel.log(
        `📁 Updated workspace files cache: ${workspaceFilesCache.size} files`
      );
    }

    // Check if file is in workspace files
    const isWorkspaceFile = workspaceFilesCache.has(filePath);

    // Additional checks for special cases
    const isSourceFile =
      !filePath.includes("node_modules") &&
      !filePath.includes(".git") &&
      !filePath.includes("dist") &&
      !filePath.match(/\.(log|vsix|tmp)$/);

    return isWorkspaceFile && isSourceFile;
  } catch (error) {
    outputChannel.log(`⚠️ Error checking file status: ${error}`);
    return false;
  }
}

// Optional: Add method to manually invalidate cache
export function invalidateFileCache(): void {
  workspaceFilesCache = null;
  lastCacheUpdate = 0;
}
