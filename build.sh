#!/bin/bash
set -e

echo "🚀 Starting build process for Two Registers website..."

# Run the Node.js build script
node build.js

echo "✅ Build completed successfully!"

# List the build output
echo "📁 Build output:"
ls -la build/
