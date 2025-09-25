#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...\n');

try {
  // Step 1: Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully\n');

  // Step 2: Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');

  // Step 3: Check if build folder exists
  const buildPath = path.join(__dirname, 'build');
  if (!fs.existsSync(buildPath)) {
    throw new Error('Build folder not found!');
  }

  // Step 4: Check for essential files
  const essentialFiles = [
    'index.html',
    'static/css',
    'static/js'
  ];

  console.log('🔍 Checking build output...');
  essentialFiles.forEach(file => {
    const filePath = path.join(buildPath, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Warning: ${file} not found in build folder`);
    } else {
      console.log(`✅ ${file} found`);
    }
  });

  // Step 5: Check build size
  const buildSize = getFolderSize(buildPath);
  console.log(`📊 Build size: ${(buildSize / 1024 / 1024).toFixed(2)} MB\n`);

  console.log('🎉 Build process completed successfully!');
  console.log('📁 Build folder is ready for deployment');
  console.log('🌐 You can now deploy to Netlify using:');
  console.log('   1. Drag & drop the build folder to Netlify');
  console.log('   2. Or connect your Git repository to Netlify');
  console.log('   3. Or use Netlify CLI: netlify deploy --prod --dir=build\n');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function getFolderSize(folderPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        calculateSize(path.join(itemPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(folderPath);
  return totalSize;
}
