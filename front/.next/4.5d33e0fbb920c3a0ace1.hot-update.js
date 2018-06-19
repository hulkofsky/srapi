webpackHotUpdate(4,{

/***/ "./utils/threejs/SceneManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneSubject__ = __webpack_require__("./utils/threejs/SceneSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GeneralLights__ = __webpack_require__("./utils/threejs/GeneralLights.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(canvas) {
  var clock = new __WEBPACK_IMPORTED_MODULE_0_three_full__["c" /* Clock */]();
  var deg = Math.PI / 180;
  var origin = new __WEBPACK_IMPORTED_MODULE_0_three_full__["o" /* Vector3 */](0, 0, 0);
  var screenDimensions = {
    width: canvas.width,
    height: canvas.height
  };
  var scene = buildScene();
  var renderer = buildRender(screenDimensions);
  var camera = buildCamera(screenDimensions);
  var sceneSubjects = createSceneSubjects(scene);

  function buildScene() {
    var scene = new __WEBPACK_IMPORTED_MODULE_0_three_full__["m" /* Scene */]();
    scene.background = new __WEBPACK_IMPORTED_MODULE_0_three_full__["d" /* Color */]('#000');
    return scene;
  }

  function buildRender(_ref) {
    var width = _ref.width,
        height = _ref.height;
    var renderer = new __WEBPACK_IMPORTED_MODULE_0_three_full__["p" /* WebGLRenderer */]({
      canvas: canvas,
      antialias: true,
      alpha: false
    });
    var DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.setClearColor(0x191715, 1); // renderer.gammaInput = false;
    // renderer.gammaOutput = false;

    return renderer;
  }

  function buildCamera(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    var aspectRatio = width / height;
    var fieldOfView = 5; //5

    var nearPlane = 4;
    var farPlane = 100;
    var camera = new __WEBPACK_IMPORTED_MODULE_0_three_full__["k" /* PerspectiveCamera */](fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 15; //7

    window.camera = camera;
    console.log(camera); // camera.lookAt(0, 0, 0);

    camera.lookAt(0, 0.1, 0);
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
    } // camera.rotation.z += 0.05*deg;
    // camera.position.y += 0.005;


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
//# sourceMappingURL=4.5d33e0fbb920c3a0ace1.hot-update.js.map