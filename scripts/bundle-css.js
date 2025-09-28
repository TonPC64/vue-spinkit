const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const buildDir = path.join(root, 'build')
const cssPath = path.join(buildDir, 'style.css')
const jsPath = path.join(buildDir, 'vue-spinkit.common.js')

function exitWith(msg) {
  console.log(msg)
  process.exit(0)
}

if (!fs.existsSync(buildDir)) {
  exitWith('build directory not found, run `npm run build` first')
}

if (!fs.existsSync(cssPath)) {
  exitWith('no CSS file to bundle; skipping')
}

if (!fs.existsSync(jsPath)) {
  exitWith(`JS bundle not found at ${jsPath}; skipping`)
}

try {
  const css = fs.readFileSync(cssPath, 'utf8')

  // JSON.stringify safely escapes the CSS for insertion into JS source
  const injected = `;(function(){try{if(typeof document!=='undefined'){var css = ${JSON.stringify(css)};var head=document.head||document.getElementsByTagName('head')[0];var style=document.createElement('style');style.setAttribute('type','text/css');style.appendChild(document.createTextNode(css));head.appendChild(style);}}catch(e){console.error('bundle-css',e);}})();\n`;

  const js = fs.readFileSync(jsPath, 'utf8')

  // Prepend injection so styles are available immediately when the bundle executes
  fs.writeFileSync(jsPath, injected + js, 'utf8')

  // Remove the separate CSS file
  fs.unlinkSync(cssPath)

  console.log('bundled CSS into', path.relative(root, jsPath))
} catch (err) {
  console.error('failed to bundle css into js:', err)
  process.exit(1)
}
