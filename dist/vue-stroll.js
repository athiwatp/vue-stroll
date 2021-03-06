(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-stroll"] = factory();
	else
		root["vue-stroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(7)
	__vue_script__ = __webpack_require__(2)
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['el', 'effect', 'collection'],
	
	  ready: function ready() {
	    var self = this;
	
	    window.requestAnimFrame = function () {
	      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	      };
	    }();
	
	    var Stroll = {
	      bind: function bind(element) {
	        var items = Array.prototype.slice.apply(element.children);
	
	        var listHeight = element.offsetHeight;
	
	        for (var i = 0, len = items.length; i < len; i++) {
	          items[i]._offsetTop = items[i].offsetTop;
	          items[i]._offsetHeight = items[i].offsetHeight;
	        }
	
	        return function () {
	          (function animloop() {
	            window.requestAnimFrame(animloop);
	            update();
	          })();
	
	          function update() {
	            var scrollTop = element.pageYOffset || element.scrollTop,
	                scrollBottom = scrollTop + listHeight;
	
	            if (scrollTop == element.lastTop) return;
	
	            element.lastTop = scrollTop;
	
	            for (var i = 0, len = items.length; i < len; i++) {
	              var item = items[i];
	
	              if (item._offsetTop + item._offsetHeight < scrollTop) {
	                item.classList.add('past');
	              } else if (item._offsetTop > scrollBottom) {
	                item.classList.add('future');
	              } else {
	                item.classList.remove('past');
	                item.classList.remove('future');
	              }
	            }
	          }
	        }();
	      }
	    };
	
	    var lists = document.querySelectorAll(self.el);
	
	    for (var i = 0; i < lists.length; i++) {
	      Stroll.bind(lists[i]);
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * stroll.js 1.2 - CSS scroll effects\r\n * http://lab.hakim.se/scroll-effects\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2012 Hakim El Hattab, http://hakim.se\r\n */.cards{-webkit-perspective:300px;-ms-perspective:300px;-o-perspective:300px;perspective:300px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.cards li{-webkit-transition:all .6s ease;transition:all .6s ease;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.cards li.past{-webkit-transform:translate3d(0,-100px,-100px) rotateX(-90deg);transform:translate3d(0,-100px,-100px) rotateX(-90deg)}.cards li.future{-webkit-transform:translate3d(0,100px,-100px) rotateX(90deg);transform:translate3d(0,100px,-100px) rotateX(90deg)}.grow li{-webkit-transition:all .6s ease;transition:all .6s ease;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.grow li.future,.grow li.past{-webkit-transform:scale(.01);transform:scale(.01)}.flip{-webkit-perspective:400px;-ms-perspective:400px;-o-perspective:400px;perspective:400px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.flip li{-webkit-transition:all .6s ease,opacity .3s ease;transition:all .6s ease,opacity .3s ease;-webkit-transform-origin:0 0;transform-origin:0 0}.flip li.past{opacity:0;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:rotateX(80deg);transform:rotateX(80deg)}.flip li.future{opacity:0;-webkit-transform:rotateX(-80deg);transform:rotateX(-80deg)}.fly{-webkit-perspective:400px;-ms-perspective:400px;-o-perspective:400px;perspective:400px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.fly li{-webkit-transition:all .6s ease,opacity .3s ease;transition:all .6s ease,opacity .3s ease;-webkit-transform-origin:50% 50% -50px;transform-origin:50% 50% -50px}.fly li.past{opacity:0;-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}.fly li.future{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.fly-simplified{-webkit-perspective:300px;-ms-perspective:300px;-o-perspective:300px;perspective:300px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.fly-simplified li{-webkit-transition:all .6s ease;transition:all .6s ease;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.fly-simplified li.past{-webkit-transform:translate3d(0,-100px,-100px) rotateX(90deg);transform:translate3d(0,-100px,-100px) rotateX(90deg)}.fly-simplified li.future{-webkit-transform:translate3d(0,100px,-100px) rotateX(-90deg);transform:translate3d(0,100px,-100px) rotateX(-90deg)}.fly-reverse{-webkit-perspective:400px;-ms-perspective:400px;-o-perspective:400px;perspective:400px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.fly-reverse li{-webkit-transition:all .6s ease,opacity .3s ease;transition:all .6s ease,opacity .3s ease;-webkit-transform-origin:50% 50% -50px;transform-origin:50% 50% -50px}.fly-reverse li.past{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.fly-reverse li.future{opacity:0;-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}.skew{-webkit-perspective:600px;-ms-perspective:600px;-o-perspective:600px;perspective:600px;-webkit-perspective-origin:0 50%;-ms-perspective-origin:0 50%;-o-perspective-origin:0 50%;perspective-origin:0 50%}.skew li{-webkit-transition:all .6s ease,opacity .2s ease;transition:all .6s ease;-webkit-transform-origin:0 0;transform-origin:0 0}.skew li.past{-webkit-transform:skewY(30deg);transform:skewY(30deg)}.skew li.future{z-index:0;-webkit-transform:skewY(-30deg);transform:skewY(-30deg)}.helix{-webkit-perspective:600px;-ms-perspective:600px;-o-perspective:600px;perspective:600px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.helix li{-webkit-transition:all .6s ease,opacity .2s ease;transition:all .6s ease,opacity .2s ease;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.helix li.past{opacity:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.helix li.future{opacity:0;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.wave li{-webkit-transition:all .6s cubic-bezier(.26,.86,.44,.985);transition:all .6s cubic-bezier(.26,.86,.44,.985)}.wave li.future,.wave li.past{-webkit-transform:translateX(-70%);transform:translateX(-70%)}.fan li{-webkit-transition:all .6s cubic-bezier(.39,.575,.565,1);transition:all .6s cubic-bezier(.39,.575,.565,1);-webkit-transform-origin:0 0;transform-origin:0 0}.fan li.past{-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}.fan li.future{-webkit-transform:rotate(70deg);transform:rotate(70deg)}.tilt{-webkit-perspective:800px;-ms-perspective:800px;-o-perspective:800px;perspective:800px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.tilt li{position:relative;-webkit-transition:all 1s cubic-bezier(.26,.86,.44,.985),opacity .3s ease;transition:all 1s cubic-bezier(.26,.86,.44,.985),opacity .3s ease}.tilt li.past{opacity:0;-webkit-transform:translateY(100%) translateZ(-200px);transform:translateY(100%) translateZ(-200px)}.tilt li.future{opacity:0;-webkit-transform:translateY(-100%) translateZ(-200px);transform:translateY(-100%) translateZ(-200px)}.curl{-webkit-perspective:600px;-ms-perspective:600px;-o-perspective:600px;perspective:600px;-webkit-perspective-origin:0 50%;-ms-perspective-origin:0 50%;-o-perspective-origin:0 50%;perspective-origin:0 50%}.curl li{-webkit-transition:all .6s ease,opacity .2s ease;transition:all .6s ease,opacity .2s ease;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.curl li.future,.curl li.past{opacity:0;-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}.papercut{-webkit-perspective:600px;-ms-perspective:600px;-o-perspective:600px;perspective:600px;-webkit-perspective-origin:0 0;-ms-perspective-origin:0 0;-o-perspective-origin:0 0;perspective-origin:0 0}.papercut li{-webkit-transition:all .6s ease;transition:all .6s ease;-webkit-transform-origin:0 0;transform-origin:0 0}.papercut li.past{-webkit-transform:skewY(-30deg);transform:skewY(-30deg)}.papercut li.future{-webkit-transform:skewY(30deg);transform:skewY(30deg)}.zipper li{-webkit-transition:all .6s cubic-bezier(.39,.575,.565,1);transition:all .6s cubic-bezier(.39,.575,.565,1);-webkit-transform-origin:50% 0;transform-origin:50% 0}.zipper li.future:nth-child(odd),.zipper li.past:nth-child(odd){-webkit-transform:translateX(80%);transform:translateX(80%)}.zipper li.future:nth-child(even),.zipper li.past:nth-child(even){-webkit-transform:translateX(-80%);transform:translateX(-80%)}.fade li{-webkit-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.fade li.future,.fade li.past{opacity:0}.twirl{-webkit-perspective:400px;-ms-perspective:400px;-o-perspective:400px;perspective:400px;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%}.twirl li{-webkit-transition:all .6s ease,opacity .2s ease;transition:all .6s ease,opacity .2s ease;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.twirl li.past{opacity:0;-webkit-transform:rotate3d(80,-70,10,180deg);transform:rotate3d(80,70,10,180deg)}.twirl li.future{opacity:0;-webkit-transform:rotate3d(80,70,10,-180deg);transform:rotate3d(80,70,10,-180deg)}", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.i(__webpack_require__(3), "");
	
	// module
	exports.push([module.id, "ul[_v-3702f133]{position:relative;width:200px;height:320px;overflow-x:hidden;overflow-y:scroll;padding:0;margin:0}ul li[_v-3702f133]{list-style:none;position:relative;padding:6px;background:#fff;color:#252525;font-size:16px;z-index:2}ul li[_v-3702f133]:nth-child(odd){background:#eee}@media (max-width:750px){ul[_v-3702f133]{min-width:216px;height:320px}}@media (max-width:480px){ul[_v-3702f133]{min-width:280px;height:320px}}", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = " <ul id=vue-stroll class=vue-stroll :class=effect _v-3702f133=\"\"> <li v-for=\"col in collection\" track-by=$index _v-3702f133=\"\"> <span v-text=col _v-3702f133=\"\"></span> </li> </ul> ";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3702f133&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-stroll.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3702f133&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-stroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ])
});
;