#!/usr/bin/env node

const { execSync } = require('child_process');
const degit = require('degit');

async function init() {
  const emitter = degit('geniusyinka/dynamic-nextjs-template/template');

  try {
    console.log('Fetching Next.js template...');
    await emitter.clone(process.cwd());
    
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    console.log('Setup complete! Your Next.js app is ready!');
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
}

init();
