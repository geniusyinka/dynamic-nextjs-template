const path = require('path');
const fs = require('fs-extra');
const { execSync } = require('child_process');

// Define the correct path to your template directory (assuming it's in the root of the project)
const templateDir = path.join(__dirname, 'template'); // make sure 'template' is the correct folder name
const targetDir = process.cwd(); // the directory where the user runs the command

async function init() {
  try {
    console.log('Initializing Next.js app...');

    // Copy files from the template directory to the target directory
    await fs.copy(templateDir, targetDir, { overwrite: false });

    console.log('Files copied! Installing dependencies...');
    
    // Run npm install in the target directory
    execSync('npm install', { stdio: 'inherit' });

    console.log('Setup complete! Your Next.js app is ready to go.');
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
}

init();
