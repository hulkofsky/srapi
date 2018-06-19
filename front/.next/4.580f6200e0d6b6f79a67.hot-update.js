webpackHotUpdate(4,{

/***/ "./utils/threejs/threeEntryPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneManager__ = __webpack_require__("./utils/threejs/SceneManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../node_modules/gsap/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(container) {
  var canvas = createCanvas(document, container);
  var sceneManager = new __WEBPACK_IMPORTED_MODULE_0__SceneManager__["a" /* default */](canvas);
  var freeze = true;
  var deg = Math.PI / 180;
  var cubeAnimation = new __WEBPACK_IMPORTED_MODULE_1_gsap__["a" /* TimelineMax */]();
  cubeAnimation.from(window.pivot.rotation, 1, {
    z: 50 * deg,
    x: -10 * deg
  }).pause();
  cubeAnimation.from(window.cubeGroup.rotation, 1, {
    y: 245 * deg
  }, '-=1').pause();
  cubeAnimation.from(window.pivot.position, 1, {
    z: -1,
    y: 1
  }, '-=1').pause();
  var canvasHalfWidth;
  var canvasHalfHeight;
  var canvasOffsetTop;
  bindEventListeners();
  render();
  sceneManager.update();

  function createCanvas(document, container) {
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    getCanvasPosition(canvas);
    return canvas;
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.onscroll = scrollCanvas;
    window.onclick = mouseClick;
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

  function getCanvasPosition(element) {
    var yPosition = 0;

    while (element) {
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    canvasOffsetTop = yPosition;
  }

  function scrollCanvas(e) {
    var delt = canvasOffsetTop - window.scrollY + 100;

    if (delt < canvas.offsetHeight) {
      var r = delt * 100 / canvas.offsetHeight / 100; // console.log(r);

      cubeAnimation.progress(1 - r);
    }

    sceneManager.update();
  }

  function mouseMove() {
    sceneManager.update();
  }

  function mouseClick() {
    sceneManager.update();
  }

  function render(time) {
    requestAnimationFrame(render);
    !freeze ? sceneManager.update() : false;
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
//# sourceMappingURL=4.580f6200e0d6b6f79a67.hot-update.js.map