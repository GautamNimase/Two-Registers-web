#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting robust build process...');

try {
  // Change to frontend directory
  process.chdir('frontend');
  
  console.log('📦 Installing dependencies with Rollup fix...');
  
  // Remove existing node_modules and package-lock.json to avoid conflicts
  if (fs.existsSync('node_modules')) {
    console.log('🗑️  Removing existing node_modules...');
    fs.rmSync('node_modules', { recursive: true, force: true });
  }
  
  if (fs.existsSync('package-lock.json')) {
    console.log('🗑️  Removing existing package-lock.json...');
    fs.unlinkSync('package-lock.json');
  }
  
  // Install dependencies with force flag to handle Rollup optional dependencies
  console.log('📥 Installing fresh dependencies...');
  execSync('npm install --force', { stdio: 'inherit' });
  
  // Try to specifically install Rollup dependencies if needed
  try {
    console.log('🔧 Ensuring Rollup dependencies are properly installed...');
    execSync('npm install @rollup/rollup-linux-x64-gnu --save-optional', { stdio: 'inherit' });
  } catch (rollupError) {
    console.log('⚠️  Rollup dependency installation failed, continuing with build...');
  }
  
  console.log('🔨 Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Go back to root
  process.chdir('..');
  
  console.log('📁 Copying build files to root...');
  
  // Remove existing build directory if it exists
  if (fs.existsSync('build')) {
    fs.rmSync('build', { recursive: true, force: true });
  }
  
  // Copy dist to build
  copyDir('frontend/dist', 'build');
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Build output available at: ./build/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Source directory ${src} does not exist`);
  }
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
