(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{
/***/"+Gof":
/***/function(e,t,n){"use strict";
// CONCATENATED MODULE: ../node_modules/is-dom-node/dist/is-dom-node.es.js
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var i=function(e){return"object"===typeof window.Node?e instanceof window.Node:null!==e&&"object"===typeof e&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName};
// CONCATENATED MODULE: ../node_modules/is-dom-node-list/dist/is-dom-node-list.es.js
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var r=function(e){var t=Object.prototype.toString.call(e);return"object"===typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"===typeof e&&"number"===typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||i(e[0]))};
// CONCATENATED MODULE: ../node_modules/tealight/dist/tealight.es.js
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var o=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(i);if(i(e))return[e];if(r(e))return Array.prototype.slice.call(e);if("string"===typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(o){return[]}return[]};
// CONCATENATED MODULE: ../node_modules/rematrix/dist/rematrix.es.js
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */
/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */function s(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=a();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */function a(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function c(e,t){for(var n=s(e),i=s(t),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],c=0;c<4;c++){var l=4*c,u=[i[l],i[l+1],i[l+2],i[l+3]],d=a[0]*u[0]+a[1]*u[1]+a[2]*u[2]+a[3]*u[3];r[o+l]=d}return r}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function l(e){var t=Math.PI/180*e,n=a();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */function u(e,t){var n=a();return n[0]=e,n[5]="number"===typeof t?t:e,n}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
// CONCATENATED MODULE: ../node_modules/miniraf/dist/miniraf.es.js
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var d,f=(d=Date.now(),function(e){var t=Date.now();t-d>16?(d=t,e(t)):setTimeout(function(){return f(e)},0)}),h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f,p={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var m={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function y(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function v(e,t){if(y(e))return Object.keys(e).forEach(function(n){return t(e[n],n,e)});if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function g(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n \u2014 "+e}),console.log(i,"color: #ea654b;")}}function b(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},i={active:[],stale:[]};
/**
	 * Take stock of active element IDs.
	 */
try{v(o("[data-sr-id]"),function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)})}catch(r){throw r}
/**
	 * Destroy stale elements.
	 */v(this.store.elements,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),v(t.stale,function(t){return delete e.store.elements[t]}),
/**
	 * Take stock of active container and sequence IDs.
	 */
v(this.store.elements,function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)}),
/**
	 * Destroy stale containers.
	 */
v(this.store.containers,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),v(i.stale,function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),
/**
	 * Destroy stale sequences.
	 */
v(this.store.sequences,function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)}),v(n.stale,function(t){return delete e.store.sequences[t]})}function w(e){var t,n=this;try{v(o(e),function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),e.setAttribute("style",r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}})}catch(i){return g.call(this,"Clean failed.",i.message)}if(t)try{b.call(this)}catch(i){return g.call(this,"Clean failed.",i.message)}}var E=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"===typeof n){if(e[n])return e[n];if("string"===typeof i[n])return e[n]=n;if("string"===typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function j(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";
/**
	 * Generate opacity styles
	 */
var d,f,h,p=parseFloat(t.opacity),m=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),y={computed:p!==m?"opacity: "+p+";":"",generated:p!==m?"opacity: "+m+";":""},v=[];if(parseFloat(i.distance)){var g="top"===i.origin||"bottom"===i.origin?"Y":"X",b=i.distance;
/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */"top"!==i.origin&&"left"!==i.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),j=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*j;break;case"px":b=j;break;case"%":
/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distaince calculation
				 */
b="Y"===g?e.node.getBoundingClientRect().height*j/100:e.node.getBoundingClientRect().width*j/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===g?v.push(
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function(e){var t=a();return t[13]=e,t}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */(b)):v.push(
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function(e){var t=a();return t[12]=e,t}(b))}i.rotate.x&&v.push((d=i.rotate.x,f=Math.PI/180*d,(h=a())[5]=h[10]=Math.cos(f),h[6]=h[9]=Math.sin(f),h[9]*=-1,h)),i.rotate.y&&v.push(
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function(e){var t=Math.PI/180*e,n=a();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&v.push(l(i.rotate.z)),1!==i.scale&&(0===i.scale?
/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
v.push(u(2e-4)):v.push(u(i.scale)));var T={};if(v.length){T.property=E("transform"),
/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
T.computed={raw:t[T.property],matrix:function(e){if("string"===typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return s(t[2].split(", ").map(parseFloat))}return a()}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */(t[T.property])},v.unshift(T.computed.matrix);var k=v.reduce(c);T.generated={initial:T.property+": matrix3d("+k.join(", ")+");",final:T.property+": matrix3d("+T.computed.matrix.join(", ")+");"}}else T.generated={initial:"",final:""};
/**
	 * Generate transition styles
	 */var O={};if(y.generated||T.generated.initial){O.property=E("transition"),O.computed=t[O.property],O.fragments=[];var x=i.delay,A=i.duration,q=i.easing;y.generated&&O.fragments.push({delayed:"opacity "+A/1e3+"s "+q+" "+x/1e3+"s",instant:"opacity "+A/1e3+"s "+q+" 0s"}),T.generated.initial&&O.fragments.push({delayed:T.property+" "+A/1e3+"s "+q+" "+x/1e3+"s",instant:T.property+" "+A/1e3+"s "+q+" 0s"})
/**
		 * The default computed transition property should be one of:
		 * undefined || '' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */,O.computed&&!O.computed.match(/all 0s/)&&O.fragments.unshift({delayed:O.computed,instant:O.computed});var P=O.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});O.generated={delayed:O.property+": "+P.delayed+";",instant:O.property+": "+P.instant+";"}}else O.generated={delayed:"",instant:""};return{inline:r,opacity:y,position:n,transform:T,transition:O}}function T(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),k.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),k.call(this,e)}.call(this,e):void 0}function k(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&w.call(n,e.node)},i-s)}}var O,x=(O=0,function(){return O++});function A(e,t){
/**
	 * We first check if the element should reset.
	 */
if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return T.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new P(n,"visible",this.store),o=new P(n,"revealed",this.store);
/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return R.call(this,n,r.body[0],-1,t),R.call(this,n,r.body[0],1,t),T.call(this,a,{reveal:!0,pristine:t})}
/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return R.call(this,n,i,-1,t),T.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return R.call(this,n,i,1,t),T.call(this,e,{reveal:!0,pristine:t})}}function q(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=x(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function P(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],v(e.members,function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)}),this.body.length&&v(e.members,function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))})}function R(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&A.call(r,a,i)},e.interval)}function L(){var e=this;b.call(this),v(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),v(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),
/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
this.delegate(),
/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
this.initTimeout=null}function M(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function I(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(y(e))return v(t,function(t){v(t,function(t,n){y(t)?(e[n]&&y(e[n])||(e[n]={}),I(e[n],t)):e[n]=t})}),e;throw new TypeError("Target must be an object literal.")}function N(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=!1);var r,s=[],a=t.interval||p.interval;try{a&&(r=new q(a));var c=o(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce(function(e,n){var a={},c=n.getAttribute("data-sr-id");c?(I(a,i.store.elements[c]),
/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
a.node.setAttribute("style",a.styles.inline.computed)):(a.id=x(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var l=I({},a.config||i.defaults,t);if(!l.mobile&&M()||!l.desktop&&!M())return c&&w.call(i,a),e;// skip elements that are disabled
var u,d=o(l.container)[0];if(!d)throw new Error("Invalid container.");return d.contains(n)?(null===(u=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return v(t,function(t){v(t,function(t){null===i&&t.node===e&&(i=t.id)})}),i}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */(d,s,i.store.containers))&&(u=x(),s.push({id:u,node:d})),a.config=l,a.containerId=u,a.styles=j(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e},[]);
/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */v(l,function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(u){return g.call(this,"Reveal failed.",u.message)}
/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */v(s,function(e){i.store.containers[e.id]={id:e.id,node:e.node}}),r&&(this.store.sequences[r.id]=r)
/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */,!0!==n&&(this.store.history.push({target:e,options:t}),
/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(L.bind(this),0))}var z=Math.sign||function(e){return(e>0)-(e<0)||+e};function F(e,t){
/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function D(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),h(function(){var i="init"===e.type||"resize"===e.type;v(n.store.containers,function(e){i&&(e.geometry=F.call(n,e,!0));var t=function(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}.call(n,e);e.scroll&&(e.direction={x:z(t.left-e.scroll.left),y:z(t.top-e.scroll.top)}),e.scroll=t}),
/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
v(t,function(e){i&&(e.geometry=F.call(n,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,u=t.geometry.bounds.bottom+t.scroll.top-i.bottom,d=t.geometry.bounds.left+t.scroll.left+i.left;return r<u&&o>d&&s>c&&a<l||"fixed"===e.styles.position}}.call(n,e)}),v(t,function(e){e.sequence?A.call(n,e):T.call(n,e)}),n.pristine=!1})}var C,S,W,Y,$,H,B,J,U="4.0.5";function X(e){var t;if(void 0===e&&(e={}),"undefined"===typeof this||Object.getPrototypeOf(this)!==X.prototype)return new X(e);if(!X.isSupported())return g.call(this,"Instantiation failed.","This browser is not supported."),m.failure();try{t=I({},H||p,e)}catch(n){return g.call(this,"Invalid configuration.",n.message),m.failure()}try{if(!o(t.container)[0])throw new Error("Invalid container.")}catch(n){return g.call(this,n.message),m.failure()}return!(H=t).mobile&&M()||!H.desktop&&!M()?(g.call(this,"This device is disabled.","desktop: "+H.desktop,"mobile: "+H.mobile),m.failure()):(m.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,C=C||D.bind(this),S=S||function(){var e=this;
/**
	 * Remove all generated styles and element ids
	 */v(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),
/**
	 * Remove all event listeners.
	 */
v(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),
/**
	 * Clear all data from the store
	 */
this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),W=W||N.bind(this),Y=Y||w.bind(this),$=$||function(){var e=this;v(this.store.history,function(t){N.call(e,t.target,t.options,!0)}),L.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return C}}),Object.defineProperty(this,"destroy",{get:function(){return S}}),Object.defineProperty(this,"reveal",{get:function(){return W}}),Object.defineProperty(this,"clean",{get:function(){return Y}}),Object.defineProperty(this,"sync",{get:function(){return $}}),Object.defineProperty(this,"defaults",{get:function(){return H}}),Object.defineProperty(this,"version",{get:function(){return U}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),J||(J=this))}X.isSupported=function(){return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}();var e},Object.defineProperty(X,"debug",{get:function(){return B||!1},set:function(e){return B="boolean"===typeof e?e:B}}),X();
/* harmony default export */t.a=X;
/***/}}]);