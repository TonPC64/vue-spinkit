<template>
  <div id="app">
    <h1>Example</h1>
    <div :key="spin" v-for="(spin, index) in allSpinner" class="loading">
      <code>
        {{showExam(spin, color[index])}}
      </code>
      <Spinner :name="spin" :color="color[index]"/>
    </div>
  </div>
</template>

<script>
import Spinner from './components/Spinner'
import spinners from './components/spinners'
import randomColor from 'randomcolor'
export default {
  name: 'App',
  components: {
    Spinner
  },
  data () {
    return {
      allSpinner: Object.keys(spinners.allSpinners),
      color: randomColor({
        count: Object.keys(spinners.allSpinners).length
      })
    }
  },
  methods: {
    showExam (name, color = '') {
      const newcolor = color !== '' ? `color="${color}"` : ''
      return `<Spinner name="${name}" ${newcolor}/>`
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
  margin-top: 60px;
}
.loading {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 50px;
}
</style>
