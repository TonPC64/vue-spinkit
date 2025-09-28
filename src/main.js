import Vue from 'vue'
import App from './Example.vue'
// Import the library entry for its side-effects (injects CSS at runtime).
// This keeps example styles working during dev without emitting a separate CSS file during library build.
import './index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
