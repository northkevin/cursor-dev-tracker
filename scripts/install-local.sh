#!/bin/bash

# Clean install dependencies
echo "🧹 Cleaning..."
rm -rf node_modules
rm -rf dist
rm -rf *.vsix

# Clean up old SQLite files and storage
echo "🧹 Cleaning up old extension data..."
rm -f ~/.cursor/extensions/kevinnorth.cursor-dev-tracker*/data/dev-tracker.db*
rm -rf ~/.cursor/User/globalStorage/kevinnorth.cursor-dev-tracker

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install || exit 1

# Build
echo "🔨 Building..."
pnpm build || exit 1

# Package extension
echo "📦 Creating VSIX package..."
pnpm package || exit 1

# Get the generated .vsix file
VSIX_FILE=$(ls *.vsix 2>/dev/null || true)
if [ -z "$VSIX_FILE" ]; then
    echo "❌ Failed to create VSIX package"
    exit 1
fi

echo "✅ Created $VSIX_FILE"

# Uninstall existing extension
echo "🗑️ Uninstalling old version..."
cursor --uninstall-extension kevinnorth.cursor-dev-tracker

echo "⏳ Waiting for uninstall to complete..."
sleep 1

echo "🔄 Restarting Extension Host..."
cursor --command "workbench.action.restartExtensionHost"

echo "⏳ Waiting for extension host to restart..."
sleep 2

# Install new version
echo "📦 Installing new version..."
cursor --install-extension "$VSIX_FILE"

echo "✅ Extension installation complete!"
echo "💡 Tip: Run 'Dev Tracker: Show Status' to verify installation"
