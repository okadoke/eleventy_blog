/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/typeface-nunito-sans/index.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/typeface-nunito-sans/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* nunito-sans-200normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 200;\n\n  src:\n    local('Nunito Sans Extra Light '),\n    local('Nunito Sans-Extra Light'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-200.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-200.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-200italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 200;\n\n  src:\n    local('Nunito Sans Extra Light italic'),\n    local('Nunito Sans-Extra Lightitalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-200italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-200italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-300normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 300;\n\n  src:\n    local('Nunito Sans Light '),\n    local('Nunito Sans-Light'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-300.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-300.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-300italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 300;\n\n  src:\n    local('Nunito Sans Light italic'),\n    local('Nunito Sans-Lightitalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-300italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-300italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-400normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 400;\n\n  src:\n    local('Nunito Sans Regular '),\n    local('Nunito Sans-Regular'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-400.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-400.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-400italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 400;\n\n  src:\n    local('Nunito Sans Regular italic'),\n    local('Nunito Sans-Regularitalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-400italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-400italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-600normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 600;\n\n  src:\n    local('Nunito Sans SemiBold '),\n    local('Nunito Sans-SemiBold'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-600.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-600.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-600italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 600;\n\n  src:\n    local('Nunito Sans SemiBold italic'),\n    local('Nunito Sans-SemiBolditalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-600italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-600italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-700normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 700;\n\n  src:\n    local('Nunito Sans Bold '),\n    local('Nunito Sans-Bold'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-700.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-700.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-700italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 700;\n\n  src:\n    local('Nunito Sans Bold italic'),\n    local('Nunito Sans-Bolditalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-700italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-700italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-800normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 800;\n\n  src:\n    local('Nunito Sans ExtraBold '),\n    local('Nunito Sans-ExtraBold'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-800.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-800.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-800italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 800;\n\n  src:\n    local('Nunito Sans ExtraBold italic'),\n    local('Nunito Sans-ExtraBolditalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-800italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-800italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-900normal - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: normal;\n\n  font-display: swap;\n\n  font-weight: 900;\n\n  src:\n    local('Nunito Sans Black '),\n    local('Nunito Sans-Black'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-900.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-900.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* nunito-sans-900italic - latin */\n\n@font-face {\n  font-family: 'Nunito Sans';\n\n  font-style: italic;\n\n  font-display: swap;\n\n  font-weight: 900;\n\n  src:\n    local('Nunito Sans Black italic'),\n    local('Nunito Sans-Blackitalic'),\n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-900italic.woff2 */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__(/*! ./files/nunito-sans-latin-900italic.woff */ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-200.woff?0aa9029aa5c94ee0245428787ff2aa8b";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-200.woff2?3f69f8c78eb965be709fada6e9326097";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff?da7c09610c91ac990644a19f2d713357";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-200italic.woff2?6efd102c0b004908b9454b4e4610d693";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-300.woff?e7a891b0ad0ce9050b19e3d0cdfcd860";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-300.woff2?f16977f35222a4cce7d6f4336732a67a";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff?1a3d2422361712bf569edf8b2e1f6d90";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-300italic.woff2?246f6e2b70f0b23e366947c975effa65";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-400.woff?8ace450709844437a579d4f4c7c37b42";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-400.woff2?9c6a1ff29aaba0c21496eac04be062df";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff?e14ffefb3a60e5d5a9a47519882f92e8";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-400italic.woff2?d44697ce7f31cee44f701572fb38cab5";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-600.woff?5a71131c00b436beb97dd2c570768f05";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-600.woff2?b56c7e1dd3d7a5fad61e46f4dd553294";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff?9db53e390a5327462f45889e249f84d6";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-600italic.woff2?0de4a8bace81fc8b1f570af06a28e385";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-700.woff?1aa5d63eca4940fbbb5181895e9bc008";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-700.woff2?d0b6d0f05c00552a21519d6bdb3e5ed7";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff?ffc1f5c22dc4b08f710c027976972de1";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-700italic.woff2?c7569232f38ac2b1b3211151127b1ed3";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-800.woff?a28845a6196298dad6dc0b2ba0b6de55";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-800.woff2?6a4c29ad18bd8072a9a9d2443d0e340e";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff?4f4e7a921cc52e9458245f66eb550004";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-800italic.woff2?0117d6315806b392f7da0d5d3aa9c7ca";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-900.woff?412c6f01c1eb3a9135d53bc4fd220a35";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-900.woff2?e22a661eeed6baa960d645c48de5a00f";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff":
/*!**********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff?708845e875a3b08640369bf84fd65472";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff2":
/*!***********************************************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-nunito-sans/files/nunito-sans-latin-900italic.woff2?0dc1055cf601fe66514482613ebdf168";

/***/ }),

/***/ "./node_modules/typeface-nunito-sans/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/typeface-nunito-sans/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--6-1!../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/typeface-nunito-sans/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/lazyload */ "./resources/js/modules/lazyload/index.js");
// Import local modules
// import '@modules/mobile-nav'


__webpack_require__(/*! typeface-nunito-sans */ "./node_modules/typeface-nunito-sans/index.css");

/***/ }),

/***/ "./resources/js/modules/lazyload/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var Lazyload = function Lazyload() {
  // lazyload our images
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.querySelectorAll('[data-lazy]');

  if (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    // options
    var options = {
      threshold: 0.5
    };

    var preloadImage = function preloadImage(img) {
      // find and store the image's data-lazy attribute
      // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
      // const srcset = img.dataset.srcset
      var src = img.dataset.lazy;
      img.src = src; // img.srcset = srcset
      // add a class of loaded
      // we can then use this as a hook for fade-in animations etc

      img.classList.add('loaded');
    };

    var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          lazyLoad.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(function (image) {
      lazyLoad.observe(image);
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Lazyload);

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: page, exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

var page = function page(name) {
  if (!name) {
    return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id');
  }

  return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id') == name;
};
/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */


var exists = function exists(el, limit) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector('body'),
  wrapper: document.getElementById('wrapper'),
  header: document.getElementById('header'),
  nav: document.getElementById('nav'),
  hero: document.getElementById('hero'),
  main: document.getElementById('main'),
  containerCentre: document.getElementById('container-centre'),
  containerRight: document.getElementById('container-right'),
  preFooter: document.getElementById('pre-footer'),
  footer: document.getElementById('footer') // mobileNav           : document.getElementById('mobile-nav'),
  // mobileNavToggle     : document.getElementById('mobile-nav-toggle')

};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/Users/Eric/proj/blog_eleventy/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /mnt/c/Users/Eric/proj/blog_eleventy/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });