webpackHotUpdate(4,{

/***/ "./utils/threejs/threeEntryPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneManager__ = __webpack_require__("./utils/threejs/SceneManager.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(container) {
  var canvas = createCanvas(document, container);
  var sceneManager = new __WEBPACK_IMPORTED_MODULE_0__SceneManager__["a" /* default */](canvas);
  var freeze = false;
  var canvasHalfWidth;
  var canvasHalfHeight;
  bindEventListeners();
  render();

  function createCanvas(document, container) {
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return canvas;
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvasHalfWidth = Math.round(canvas.offsetWidth / 2);
    canvasHalfHeight = Math.round(canvas.offsetHeight / 2);
    sceneManager.onWindowResize();
  }

  function mouseMove(_ref) {
    var screenX = _ref.screenX,
        screenY = _ref.screenY;
    sceneManager.onMouseMove(screenX - canvasHalfWidth, screenY - canvasHalfHeight);
  }

  function render(time) {
    requestAnimationFrame(render);
    freeze ? sceneManager.update() : false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threejs/threeEntryPoint.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.569366a678966a94c4d1.hot-update.js.map