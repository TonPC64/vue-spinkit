<template>
  <div id="app">
    <div class="top-row">
      <h1>Example Vue Spinkit</h1>
      <div class="github-buttons-container">
        <!-- Star button -->
        <a class="github-button" href="https://github.com/TonPC64/vue-spinkit" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star TonPC64/vue-spinkit on GitHub">Star</a>
        <!-- Fork button -->
        <a class="github-button" href="https://github.com/TonPC64/vue-spinkit/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork TonPC64/vue-spinkit on GitHub">Fork</a>
      </div>
    </div>

    <div :key="spinner.name" v-for="spinner in allSpinner">
      <h2>{{spinner.name}}</h2>
      <div class="columns">
        <div :key="spin" v-for="(spin, index) in spinner.spin" class="loading column">
          <span class="example-code" v-html="showExam(spin, color[index])"></span>
          <Spinner :name="spin" :color="color[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import spinners from './components/spinners.js'
import randomColor from 'randomcolor'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'App',
  components: {
    Spinner
  },
  data () {
    return {
      allSpinner: [
        {
          name: 'Spinkit',
          spin: Object.keys(spinners.spinkitSpinners)
        },
        {
          name: 'Loaders.css',
          spin: Object.keys(spinners.loadersCssSpinners)
        },
        {
          name: 'Loading.io',
          spin: Object.keys(spinners.loadingIOSpinners)
        },
        {
          // https://github.com/yangshun/awesome-spinners
          name: 'Awesome Spinners',
          spin: Object.keys(spinners.awesomeSpinners)
        }
      ],
      color: randomColor({
        count: Object.keys(spinners.allSpinners).length
      })
    }
  },
  beforeMount () {
    // load GitHub buttons script if not already loaded
    if (!document.getElementById('github-btn-script')) {
      const s = document.createElement('script')
      s.id = 'github-btn-script'
      s.async = true
      s.defer = true
      s.src = 'https://buttons.github.io/buttons.js'
      document.body.appendChild(s)
    }
  },
  methods: {
    showExam (name, color = '') {
      const newcolor = color !== '' ? `color="${color}"` : ''
      const code = `<Spinner name="${name}" ${newcolor}/>`
      return Prism.highlight(code, Prism.languages.markup, 'markup')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 60px;
  width: 100%;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-bottom: 50px;
}
.example-code {
  padding: 10px;
  width: 90vw;
  border-radius: 3px;
  background-color: rgb(224, 224, 224);
  margin: 5px 5px 20px 5px;
}

.columns {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
}
.column {
  display: flex;
  flex: 1;
}
@media screen and (min-width: 1024px) {
  #app {
    width: 1024px;
  }
  .example-code {
    width: 450px;
  }
}
.github-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
}
</style>
