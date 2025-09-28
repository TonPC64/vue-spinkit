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
  :style="style">
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
    },
    width: {
      type: String,
      default: ''
    },
    height: {
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
    },
    style () {
      let color = this.color !== '' ? 'color: ' + this.color + ';' : ''
      let width = this.width !== '' ? 'width: ' + this.width + 'px;' : ''
      let height = this.height !== '' ? 'height: ' + this.height + 'px;' : ''
      return (color + width + height)
    }
  }
}
</script>
