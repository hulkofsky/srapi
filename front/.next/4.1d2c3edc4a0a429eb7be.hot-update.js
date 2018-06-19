webpackHotUpdate(4,{

/***/ "./utils/threeRising/threeEntryPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneManager__ = __webpack_require__("./utils/threeRising/SceneManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../node_modules/gsap/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(container) {
  var canvas = createCanvas(document, container);
  var sceneManager = new __WEBPACK_IMPORTED_MODULE_0__SceneManager__["a" /* default */](canvas, objName);
  var freeze = true;
  var deg = Math.PI / 180;
  var canvasHalfWidth;
  var canvasHalfHeight;
  var canvasOffsetTop;
  bindEventListeners();
  render();
  setTimeout(function () {
    sceneManager.update();
  }, 3000);
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

  function getCanvasPosition() {
    var element = document.getElementsByTagName('canvas')[1];
    console.log(document.getElementsByTagName('canvas').parentNode); // console.log(document.getElementsByTagName('canvas'));

    var yPosition = 0;

    while (element) {
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    canvasOffsetTop = yPosition;
  }

  function scrollCanvas() {
    var delt = canvasOffsetTop - window.scrollY + 150;

    if (delt < canvas.offsetHeight) {
      var r = delt * 100 / canvas.offsetHeight / 100; // window.cubeRisingAnim.progress(1-r);
      // window.cubeFooterAnim.progress(1-r);

      switch (objName) {
        case 'cube_rising':
          console.log('rising:', r);
          break;

        case 'cube_footer':
          console.log('footer:', r);
          break;
      }
    }

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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threeRising/threeEntryPoint.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1d2c3edc4a0a429eb7be.hot-update.js.map