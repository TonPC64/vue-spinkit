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

## [DEMO](https://tonpc64.github.io/vue-spinkit/)

![](./static/example1.gif)
![](./static/example2.gif)
![](./static/example3.gif)
![](./static/example4.gif)

Installation
------------

```bash
# using npm
npm install --save vue-spinkit
# or yarn
yarn add vue-spinkit
```

Quick usage (bundlers — recommended)
-----------------------------------

If you're using a bundler (Vite, Webpack, Rollup, etc.), import the package root. The library entry injects the CSS at runtime, so you do not need to import any CSS file.

```js
import Vue from 'vue'
import Spinner from 'vue-spinkit'

// Register globally
Vue.component('Spinner', Spinner)

// or locally in a component
export default {
  components: { Spinner }
}
```

Notes:

* Always import from the package root (e.g. `import Spinner from 'vue-spinkit'`). Importing component files directly (for example `vue-spinkit/src/components/Spinner.vue`) may bypass the CSS-injection entry and you'll see unstyled output.

Browser (UMD) usage
--------------------

You can also use the prebuilt UMD bundle in a plain HTML page. The UMD bundle includes the runtime style injection.

```html
<!-- Vue must be present -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<!-- UMD build served from the package (or your CDN)
     change path to where your build is served -->
<script src="https://unpkg.com/vue-spinkit/dist/vue-spinkit.common.js"></script>
<script>
  // The library exposes `VueSpinkit` as the global name (UMD). Use the exported Spinner.
  const Spinner = window.VueSpinkit && (window.VueSpinkit.Spinner || window.VueSpinkit.default)
  Vue.component('Spinner', Spinner)
  new Vue({ el: '#app' })
</script>
```

Use in templates
---------------

```html
<Spinner name="circle" color="#e74c3c" />
```

Props
-----

The Spinner component accepts the following props:

| Prop        | Type             | Description                                | Default        |
| ----------- | ---------------- | ------------------------------------------ | -------------- |
| `name`      | string           | Which spinner to render.                   | `three-bounce` |
| `color`     | string           | Color value (hex, rgb, or named color).    | —              |
| `noFadeIn`  | boolean          | Disable fade-in.                           | —              |
| `fadeIn`    | string           | Fade-in timing: `full`, `half`, `quarter`. | —              |
| `className` | string           | Extra CSS class applied to the spinner.    | —              |
| `width`     | string \| number | Spinner width (e.g. `40px` or `40`).       | —              |
| `height`    | string \| number | Spinner height (e.g. `40px` or `40`).      | —              |

Server-side rendering (SSR)
--------------------------

The library injects styles on the client side only (it checks for `document` before injecting). That means:

* On SSR the server HTML won't include the styles. When the page is hydrated in the browser the library will insert the CSS into the page head.
* If you need server-rendered inline-critical styles, you should extract the CSS at build time (not covered here) or control injection manually by adding an explicit export (advanced).

Troubleshooting
---------------

* If spinners look unstyled, make sure you imported from the package root: `import Spinner from 'vue-spinkit'`.
* If you still see a separate `style.css` in your build output, check for any components or demo files that import CSS without `?raw` or any SFC `<style>` blocks that pull in CSS. The library is configured to avoid emitting a separate CSS file when built from the entrypoint.

Build notes (for maintainers)
----------------------------

* Building locally produces a single JS bundle (UMD) that contains both code and CSS injection. Run:

```bash
npm run build
```

* The CI workflow uses a smoke test to verify the built bundle loads — the test no longer requires a separate CSS file because styles are injected by the JS bundle.

License
-------

MIT
