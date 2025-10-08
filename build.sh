#!/bin/bash
set -e

echo "🚀 Starting build process for Two Registers website..."

# Navigate to frontend directory
cd frontend

echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building the application..."
npm run build

echo "✅ Build completed successfully!"

# List the build output
echo "📁 Build output:"
ls -la dist/
