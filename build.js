#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting build process...');

try {
  // Change to frontend directory
  process.chdir('frontend');
  
  console.log('📦 Installing dependencies...');
  // Use npm install with legacy peer deps to handle optional dependencies better
  try {
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  First install attempt failed, trying alternative approach...');
    // Fallback: remove package-lock.json and try again
    if (fs.existsSync('package-lock.json')) {
      fs.unlinkSync('package-lock.json');
    }
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
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
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
