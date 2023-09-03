# Attention

> This is a fork of vue-spinkit that works in vuejs 3. All other documentation should be accurate HOWEVER install this version

```
npm install --save @ventralnet/vue3-spinkit
```

# vue-spinkit

> A collection of loading indicators animated with CSS for VueJS

[![Language](https://img.shields.io/badge/language-vue-green.svg)](https://img.shields.io/badge/language-vue-green.svg)
[![License](https://img.shields.io/badge/license-MIT-000000.svg)](https://img.shields.io/badge/license-MIT-000000.svg)
[![NPM Package](https://img.shields.io/npm/v/vue-spinkit.svg)](https://www.npmjs.com/package/vue-spinkit)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-spinkit.svg)](https://npmjs.org/package/vue-spinkit)
[![Build Status](https://app.travis-ci.com/TonPC64/vue-spinkit.svg?branch=master)](https://app.travis-ci.com/TonPC64/vue-spinkit)

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
yarn add @ventralnet/vue3-spinkit
# use npm
npm install --save @ventralnet/vue3-spinkit
```

## How to use
```js
import Spinner from '@ventralnet/vue3-spinkit'

// Register as a component in your component
```

## In file vue
```html
<Spinner name="circle" color="red"/>
```

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
