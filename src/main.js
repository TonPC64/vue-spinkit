// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Example from './Example'
import VueGitHubCorners from 'vue-gh-corners'

import 'vue-gh-corners/dist/vue-github-corners.iife.css'

Vue.use(VueGitHubCorners)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Example },
  template: '<Example/>'
})
