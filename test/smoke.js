// Simple smoke test to verify the built library can be loaded
const fs = require('fs');
const path = require('path');

console.log('🧪 Running smoke test...');

// Check if build files exist
const buildDir = path.join(__dirname, '..', 'build');
const jsFile = path.join(buildDir, 'vue-spinkit.common.js');
const cssFile = path.join(buildDir, 'style.css');

if (!fs.existsSync(jsFile)) {
  console.error('❌ Built JavaScript file not found:', jsFile);
  process.exit(1);
}

if (!fs.existsSync(cssFile)) {
  console.error('❌ Built CSS file not found:', cssFile);
  process.exit(1);
}

// Check if the JS file can be required
try {
  const VueSpinkit = require(jsFile);
  if (VueSpinkit && (VueSpinkit.default || VueSpinkit.Spinner)) {
    console.log('✅ Built library loads successfully');
    console.log('✅ JS file size:', (fs.statSync(jsFile).size / 1024).toFixed(2), 'KB');
    console.log('✅ CSS file size:', (fs.statSync(cssFile).size / 1024).toFixed(2), 'KB');
  } else {
    console.error('❌ Built library does not export expected components');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Failed to load built library:', error.message);
  process.exit(1);
}

console.log('🎉 Smoke test passed!');