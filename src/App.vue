<template>
  <div id="app">
    <Spinner name="circle" />
  </div>
</template>

<script>
import Spinner from './components/Spinner'

export default {
  name: 'App',
  components: {
    Spinner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
