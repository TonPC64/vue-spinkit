# vue-spinkit

> A collection of loading indicators animated with CSS for VueJS

[![Language](https://img.shields.io/badge/language-vue-green.svg)](https://img.shields.io/badge/language-vue-green.svg)
[![License](https://img.shields.io/badge/license-MIT-000000.svg)](https://img.shields.io/badge/license-MIT-000000.svg)
[![NPM Package](https://img.shields.io/npm/v/vue-spinkit.svg)](https://www.npmjs.com/package/vue-spinkit)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-spinkit.svg)](https://npmjs.org/package/vue-spinkit)
[![Build Status](https://github.com/TonPC64/vue-spinkit/actions/workflows/node.js.yml/badge.svg)](https://github.com/TonPC64/vue-spinkit/actions/workflows/node.js.yml)

## Inspiration
* [Spinkit](http://tobiasahlin.com/spinkit/) css animated loading
* [react-spinkit](https://github.com/KyleAMathews/react-spinkit)
* [loaders.css](https://connoratherton.com/loaders)

## [DEMO](http://vue-spinkit.surge.sh/)
![](./static/example1.gif)
![](./static/example2.gif)
![](./static/example3.gif)
![](./static/example4.gif)

## Installation

```bash
# use yarn
yarn add vue-spinkit
# use npm
npm install --save vue-spinkit
```

## How to use
```js
import Vue from 'vue'
import Spinner from 'vue-spinkit'

Vue.component('Spinner', Spinner)
```

## In file vue
```html
<Spinner name="circle" color="red"/>
```

## Bundle Size Optimization

Vue-spinkit has been optimized for minimal bundle size:

* **Core build** (default): Only includes the most popular spinners (~5KB total)
  * Includes: three-bounce (default), pulse, circle, wave, rotating-plane
  * **98% smaller** CSS bundle (0.96KB vs 49KB)

* **Full build**: All spinners included (~55KB total)

  ```bash
  npm run build:full  # Build full version with all spinners
  ```

### Bundle Sizes

| Build | JS Size | CSS Size | Total | Spinners |
|-------|---------|----------|-------|----------|
| Core (default) | 4.2KB | 0.96KB | **~5KB** | 5 popular |
| Full | 4.2KB | 49KB | ~53KB | All 50+ |

The core build includes the most commonly used spinners. If you need additional spinners, use the full build or import specific CSS files.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | string | 'three-bounce' | specify spinner to use (defaults to line-scale-pulse-out-rapid). |
| color | string |  | programmatically set the color of the spinners; this can either be a hex value or a color word. |
| noFadeIn | boolean | false | set use fade in |
| fadeIn | string | 'full' | set the time before the spinner fades in. Have 'full', 'half' and 'quarter' |
| className | string | | add a custom classname to the outer div |
| width | string | | set width of spinner |
| height | string | | set heght of spinner |
