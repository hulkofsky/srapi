webpackHotUpdate(4,{

/***/ "./utils/threejs/SceneManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneSubject__ = __webpack_require__("./utils/threejs/SceneSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GeneralLights__ = __webpack_require__("./utils/threejs/GeneralLights.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(canvas) {
  var clock = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Clock */]();
  var origin = new __WEBPACK_IMPORTED_MODULE_0_three__["i" /* Vector3 */](0, 0, 0);
  var screenDimensions = {
    width: canvas.width,
    height: canvas.height
  };
  var scene = buildScene();
  var renderer = buildRender(screenDimensions);
  var camera = buildCamera(screenDimensions);
  var sceneSubjects = createSceneSubjects(scene);

  function buildScene() {
    var scene = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Scene */]();
    scene.background = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* Color */]("#FFF");
    return scene;
  }

  function buildRender(_ref) {
    var width = _ref.width,
        height = _ref.height;
    var renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* WebGLRenderer */]({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    var DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    return renderer;
  }

  function buildCamera(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    var aspectRatio = width / height;
    var fieldOfView = 60;
    var nearPlane = 4;
    var farPlane = 100;
    var camera = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* PerspectiveCamera */](fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 40;
    return camera;
  }

  function createSceneSubjects(scene) {
    var sceneSubjects = [new __WEBPACK_IMPORTED_MODULE_2__GeneralLights__["a" /* default */](scene), new __WEBPACK_IMPORTED_MODULE_1__SceneSubject__["a" /* default */](scene)];
    return sceneSubjects;
  }

  function update() {
    var elapsedTime = clock.getElapsedTime();

    for (var i = 0; i < sceneSubjects.length; i++) {
      sceneSubjects[i].update(elapsedTime);
    }

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    var width = canvas.width,
        height = canvas.height;
    screenDimensions.width = width;
    screenDimensions.height = height;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  return {
    update: update,
    onWindowResize: onWindowResize
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threejs/SceneManager.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.95987528138ed118d850.hot-update.js.map