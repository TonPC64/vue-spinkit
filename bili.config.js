module.exports = {
  output: {
    dir: 'public',
    fileName: 'vue-spinkit[min][ext]',
    format: "cjs-min",
    minify: true
  },
  babel: {
    babelrc: false
  },
  banner: true,
  plugins: {
    vue: {css: true},
    babel: false
  }
}