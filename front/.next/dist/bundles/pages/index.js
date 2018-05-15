module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx: Expected corresponding JSX closing tag for <br> (142:14)\n\n  140 |                 STUDENT LIVING. <br>\n  141 |                 IT’S JUST LIVING.\n> 142 |               </div>\n      |               ^\n  143 |             </div>\n  144 | \n  145 |             <div className=\"row\">\n    at _class.raise (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8051:18)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElementAt (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8024:34)\n    at _class.jsxParseElement (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8077:19)\n    at _class.parseExprAtom (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:8084:21)\n    at _class.parseExprSubscripts (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:2725:21)\n    at _class.parseMaybeUnary (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:2704:21)\n    at _class.parseExprOps (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:2616:21)\n    at _class.parseMaybeConditional (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:2588:21)\n    at _class.parseMaybeAssign (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:2546:21)\n    at _class.parseParenAndDistinguishExpression (C:\\Users\\venom\\Desktop\\future_generation\\front\\node_modules\\babylon\\lib\\index.js:3271:28)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map