<template>
  <div
  v-if="loading.className !== ''"
  :class="[
    {
      'sk-fade-in': fadeIn === 'full' && !noFadeIn,
      'sk-fade-in-half-second': fadeIn === 'half' && !noFadeIn,
      'sk-fade-in-quarter-second': fadeIn === 'quarter' && !noFadeIn,
      [className]: !!className
    },
    'sk-spinner',
    loading.className
  ]"
  :style="color !== ''? 'color: '+ color+ ';': ''">
    <div :key="index" v-for="(_, index) in loading.divCount"></div>
  </div>
</template>

<script>
import spinners from './spinners'
export default {
  name: 'Spinner',
  props: {
    name: {
      type: String,
      default: 'three-bounce'
    },
    color: {
      type: String,
      default: ''
    },
    noFadeIn: {
      type: Boolean,
      default: false
    },
    fadeIn: {
      type: String,
      default: 'full'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      allSpinners: spinners.allSpinners
    }
  },
  computed: {
    loading () {
      const allSpinners = this.allSpinners[this.name]
      if (allSpinners !== undefined) {
        const className = allSpinners.className !== undefined ? allSpinners.className : this.name
        return {
          ...allSpinners,
          className
        }
      } else {
        return {
          className: '',
          divCount: 0
        }
      }
    }
  }
}
</script>

<style scoped>
@import 'loaders.css';
@import './css/loaders-css.css';
@import './css/base.css';
@import './css/fade-in.css';

@import './css/rotating-plane.css';
@import './css/double-bounce.css';
@import './css/wave.css';
@import './css/wandering-cubes.css';
@import './css/pulse.css';
@import './css/chasing-dots.css';
@import './css/three-bounce.css';
@import './css/circle.css';
@import './css/cube-grid.css';
@import './css/fading-circle.css';
@import './css/folding-cube.css';
@import './css/wordpress.css';
</style>
