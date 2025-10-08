#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting simple build process...');

try {
  // Change to frontend directory
  process.chdir('frontend');
  
  console.log('🗑️  Cleaning existing dependencies...');
  // Remove node_modules and package-lock.json
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  if (fs.existsSync('package-lock.json')) {
    execSync('rm -f package-lock.json', { stdio: 'inherit' });
  }
  
  console.log('📦 Installing dependencies with --force...');
  execSync('npm install --force', { stdio: 'inherit' });
  
  console.log('🔨 Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Go back to root
  process.chdir('..');
  
  console.log('📁 Copying build files...');
  // Remove existing build directory
  if (fs.existsSync('build')) {
    execSync('rm -rf build', { stdio: 'inherit' });
  }
  // Copy dist to build
  execSync('cp -r frontend/dist build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
