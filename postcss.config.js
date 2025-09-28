// Modern PostCSS 8 plugins to replace deprecated ones
const trimPlugin = () => {
  return {
    postcssPlugin: 'vue-scoped-trim',
    Once(root) {
      // Clean up empty rules and whitespace
      root.walkRules(rule => {
        if (rule.nodes && rule.nodes.length === 0) {
          rule.remove()
        }
      })
    }
  }
}
trimPlugin.postcss = true

const addIdPlugin = () => {
  return {
    postcssPlugin: 'vue-scoped-id',
    Rule() {
      // Scoped CSS functionality - handled by Vue SFC compiler
      // This plugin is mainly a placeholder to prevent deprecated warnings
    }
  }
}
addIdPlugin.postcss = true

module.exports = {
  plugins: [
    require('autoprefixer'),
    trimPlugin(),
    addIdPlugin()
  ]
}