<template>
  <div :class="loading.className">
    <div :key="index" v-for="(_, index) in loading.divCount"></div>
  </div>
</template>

<script>
import '../css/base.css'
import '../css/loaders-css.css'
import '../css/fade-in.css'
import '../css/chasing-dots.css'
import '../css/circle.css'
import '../css/cube-grid.css'
import '../css/double-bounce.css'
import '../css/folding-cube.css'
import '../css/pulse.css'
import '../css/rotating-plane.css'
import '../css/three-bounce.css'
import '../css/wandering-cubes.css'
import '../css/wave.css'
import '../css/wordpress.css'

export default {
  name: 'Spinner',
  props: {
    name: {
      type: String,
      require: true
    },
    color: {
      type: String
    }
  },
  data () {
    return {
      spinkitSpinners: {
        'circle': { className: 'sk-circle', divCount: 12 },
        'cube-grid': { className: 'sk-cube-grid', divCount: 9 },
        'wave': { className: 'sk-wave', divCount: 5 },
        'folding-cube': { className: 'sk-folding-cube', divCount: 4 },
        'three-bounce': { className: 'sk-three-bounce', divCount: 3 },
        'double-bounce': { className: 'sk-double-bounce', divCount: 2 },
        'wandering-cubes': { className: 'sk-wandering-cubes', divCount: 2 },
        'chasing-dots': { className: 'sk-chasing-dots', divCount: 2 },
        'rotating-plane': { className: 'sk-rotating-plane', divCount: 1 },
        'pulse': { className: 'sk-pulse', divCount: 1 },
        'wordpress': { className: 'sk-wordpress', divCount: 1 }
      },
      loadersCssSpinners: {
        'ball-grid-beat': { divCount: 9 },
        'ball-grid-pulse': { divCount: 9 },
        'line-spin-fade-loader': { divCount: 8 },
        'ball-spin-fade-loader': { divCount: 8 },
        'ball-pulse-rise': { divCount: 5 },
        'line-scale': { divCount: 5 },
        'line-scale-pulse-out': { divCount: 5 },
        'line-scale-pulse-out-rapid': { divCount: 5 },
        'pacman': { divCount: 5 },
        'line-scale-party': { divCount: 4 },
        'ball-triangle-path': { divCount: 3 },
        'ball-scale-multiple': { divCount: 3 },
        'ball-scale-ripple-multiple': { divCount: 3 },
        'ball-pulse-sync': { divCount: 3 },
        'ball-beat': { divCount: 3 },
        'ball-zig-zag': { divCount: 2 },
        'ball-zig-zag-deflect': { divCount: 2 },
        'ball-clip-rotate-pulse': { divCount: 2 },
        'ball-clip-rotate-multiple': { divCount: 2 },
        'ball-clip-rotate': { divCount: 1 },
        'ball-scale-ripple': { divCount: 1 },
        'triangle-skew-spin': { divCount: 1 }
      }
    }
  },
  computed: {
    loading () {
      return this.spinkitSpinners[this.name]
    }
  }
}
</script>
