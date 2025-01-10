#!/bin/bash

# Clean install dependencies
echo "🧹 Cleaning..."
rm -rf node_modules
rm -rf dist
rm -rf *.vsix

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install || exit 1

# Build
echo "🔨 Building..."
pnpm build || exit 1

# Generate Prisma client
echo "🔧 Generating Prisma client..."
pnpm prisma generate || exit 1

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
echo "
To install:
1. Open Cursor
2. Go to Extensions view
3. Click '...' menu (top-right)
4. Select 'Install from VSIX...'
5. Choose $VSIX_FILE
"
