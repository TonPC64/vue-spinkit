// Library entrypoint for vue-spinkit
import Spinner from './components/Spinner.vue'

// Import CSS files as raw text and inject at runtime so Vite doesn't emit a separate CSS asset.
// This keeps the final build as a single JS file containing both JS and CSS.
import baseCss from './components/css/base.css?raw'
import fadeInCss from './components/css/fade-in.css?raw'
import rotatingPlaneCss from './components/css/rotating-plane.css?raw'
import doubleBounceCss from './components/css/double-bounce.css?raw'
import waveCss from './components/css/wave.css?raw'
import wanderingCubesCss from './components/css/wandering-cubes.css?raw'
import pulseCss from './components/css/pulse.css?raw'
import chasingDotsCss from './components/css/chasing-dots.css?raw'
import threeBounceCss from './components/css/three-bounce.css?raw'
import circleCss from './components/css/circle.css?raw'
import cubeGridCss from './components/css/cube-grid.css?raw'
import fadingCircleCss from './components/css/fading-circle.css?raw'
import foldingCubeCss from './components/css/folding-cube.css?raw'
import wordpressCss from './components/css/wordpress.css?raw'
import loadersCss from './components/css/loaders.css?raw'
import loadersCssExtra from './components/css/loaders-css.css?raw'
import circleSolidSpinCss from './components/css/circle-solid-spin.css?raw'
import dualRingCss from './components/css/dual-ring.css?raw'
import ellipsisCss from './components/css/ellipsis.css?raw'
import facebookCss from './components/css/facebook.css?raw'
import gridCss from './components/css/grid.css?raw'
import heartCss from './components/css/heart.css?raw'
import hourglassCss from './components/css/hourglass.css?raw'
import ringCss from './components/css/ring.css?raw'
import rippleCss from './components/css/ripple.css?raw'
import rollerCss from './components/css/roller.css?raw'
import clockCss from './components/css/clock.css?raw'
import hydrogenCss from './components/css/hydrogen.css?raw'
import loadbarCss from './components/css/loadbar.css?raw'
import circleFadeCss from './components/css/circle-fade.css?raw'
import moonCss from './components/css/moon.css?raw'

const __injectedCss = [
	baseCss,
	fadeInCss,
	rotatingPlaneCss,
	doubleBounceCss,
	waveCss,
	wanderingCubesCss,
	pulseCss,
	chasingDotsCss,
	threeBounceCss,
	circleCss,
	cubeGridCss,
	fadingCircleCss,
	foldingCubeCss,
	wordpressCss,
	loadersCss,
	loadersCssExtra,
	circleSolidSpinCss,
	dualRingCss,
	ellipsisCss,
	facebookCss,
	gridCss,
	heartCss,
	hourglassCss,
	ringCss,
	rippleCss,
	rollerCss,
	clockCss,
	hydrogenCss,
	loadbarCss,
	circleFadeCss,
	moonCss
].join('\n')

if (typeof document !== 'undefined') {
	const style = document.createElement('style')
	style.setAttribute('data-vue-spinkit', '')
	style.appendChild(document.createTextNode(__injectedCss))
	document.head.appendChild(style)
}

// For CommonJS build, export the component
export { Spinner }
export default Spinner
