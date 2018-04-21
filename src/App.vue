<template>
  <div id="app">
    <div :key="spin" v-for="spin in allSpinner" class="loading">
      {{spin}}
      <Spinner :name="spin"/>
    </div>
  </div>
</template>

<script>
import Spinner from './components/Spinner'
import spinners from './components/spinners'

export default {
  name: 'App',
  components: {
    Spinner
  },
  data () {
    return {
      allSpinner: Object.keys(spinners.allSpinners)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
