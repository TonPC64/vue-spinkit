const vue = require('rollup-plugin-vue')

module.exports = {
  outDir: 'public',
  babel: {
    babelrc: false
  },
  banner: true,
  format: ['umd-min'],
  css: true,
  plugins: [
    vue({ css: true })
  ]
}