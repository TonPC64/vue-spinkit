// Simple smoke test to verify the built library can be loaded
const fs = require('fs');
const path = require('path');

console.log('🧪 Running smoke test...');

// Check if build files exist
const buildDir = path.join(__dirname, '..', 'build');
const jsFile = path.join(buildDir, 'vue-spinkit.common.js');

if (!fs.existsSync(jsFile)) {
  console.error('❌ Built JavaScript file not found:', jsFile);
  process.exit(1);
}

// A separate CSS file is optional because the library may inject CSS into the JS bundle.
// If present, we'll report its size; if not, that's fine.
const cssFile = path.join(buildDir, 'style.css');

// Check if the JS file can be required
try {
  const VueSpinkit = require(jsFile);
  if (VueSpinkit && (VueSpinkit.default || VueSpinkit.Spinner)) {
    console.log('✅ Built library loads successfully');
    console.log('✅ JS file size:', (fs.statSync(jsFile).size / 1024).toFixed(2), 'KB');
    if (fs.existsSync(cssFile)) {
      console.log('ℹ️ Found separate CSS file. Size:', (fs.statSync(cssFile).size / 1024).toFixed(2), 'KB');
    } else {
      console.log('ℹ️ No separate CSS file found (styles may be injected by the JS bundle)');
    }
  } else {
    console.error('❌ Built library does not export expected components');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Failed to load built library:', error.message);
  process.exit(1);
}

console.log('🎉 Smoke test passed!');