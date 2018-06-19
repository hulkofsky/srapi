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
  var origin = new __WEBPACK_IMPORTED_MODULE_0_three_full__["n" /* Vector3 */](0, 0, 0);
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
    scene.background = new __WEBPACK_IMPORTED_MODULE_0_three_full__["d" /* Color */]('#191715');
    return scene;
  }

  function buildRender(_ref) {
    var width = _ref.width,
        height = _ref.height;
    var renderer = new __WEBPACK_IMPORTED_MODULE_0_three_full__["o" /* WebGLRenderer */]({
      canvas: canvas,
      antialias: true,
      alpha: false
    });
    var DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.setClearColor(0x191715); // renderer.gammaInput = false;
    // renderer.gammaOutput = false;

    return renderer;
  }

  function buildCamera(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    var aspectRatio = width / height;
    var fieldOfView = 4; //5

    var nearPlane = 4;
    var farPlane = 100;
    var camera = new __WEBPACK_IMPORTED_MODULE_0_three_full__["k" /* PerspectiveCamera */](fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 11;
    window.camera = camera;
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

/***/ }),

/***/ "./utils/threejs/SceneSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneManager__ = __webpack_require__("./utils/threejs/SceneManager.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(scene) {
  var deg = Math.PI / 180;
  var pivot = new __WEBPACK_IMPORTED_MODULE_0_three_full__["j" /* Object3D */]();
  var sceneManager = Object(__WEBPACK_IMPORTED_MODULE_1__SceneManager__["a" /* default */])();
  var cubeBackMaterials = [new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x302e2f
  }), // left
  new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x363234
  }), new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x191715
  }), // top
  new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x191715
  }), new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x231f20
  }), new __WEBPACK_IMPORTED_MODULE_0_three_full__["f" /* LineBasicMaterial */]({
    color: 0x231f20
  })];
  var cubeGeometry = new __WEBPACK_IMPORTED_MODULE_0_three_full__["b" /* BoxGeometry */](3.999, 3.999, 3.999);
  var cubeBack = new __WEBPACK_IMPORTED_MODULE_0_three_full__["h" /* Mesh */](cubeGeometry, cubeBackMaterials);
  cubeBack.position.set(-1, -1, 1); // cubeBack.rotation.set(36*deg, 45*deg, 0);

  var cubeGroup = new __WEBPACK_IMPORTED_MODULE_0_three_full__["e" /* Group */]();
  cubeGroup.rotation.set(36 * deg, 225.1 * deg, 0); //===== GLOBAL ==== ///
  // window.cubeGroup = cubeGroup;
  // window.cubeBack = cubeBack;
  // window.pivot = pivot;
  //===== GLOBAL ==== ///

  var loaderObj = new __WEBPACK_IMPORTED_MODULE_0_three_full__["i" /* OBJLoader */]();
  var loaderMtl = new __WEBPACK_IMPORTED_MODULE_0_three_full__["g" /* MTLLoader */]();

  var getCube = function getCube(modelName) {
    return new Promise(function (resolve) {
      loaderMtl.load('/static/obj/cube.mtl', function (materials) {
        materials.preload();
        loaderObj.setMaterials(materials);
        loaderObj.load('/static/obj/cube.obj', function (obj) {
          obj.traverse(function (child) {
            if (child instanceof __WEBPACK_IMPORTED_MODULE_0_three_full__["h" /* Mesh */]) {
              child.material.forEach(function (item) {
                item.color.set(0xFFFFFF);
              });
            }
          });
          resolve(obj);
        });
      });
    });
  };

  var addObjectToScene = function addObjectToScene(objArr) {
    cubeGroup.add(cubeBack);
    objArr.forEach(function (item) {
      cubeGroup.add(item);
    });
    pivot.position.set(0, -0.1, 0);
    pivot.add(cubeGroup);
    scene.add(pivot);
  };

  var whenTheAllModelsLoaded = function whenTheAllModelsLoaded() {
    console.log('uploaded');
    scene.background = new __WEBPACK_IMPORTED_MODULE_0_three_full__["d" /* Color */]('#231f20');
    sceneManager.update();
  };

  Promise.all([getCube().then(function (obj) {
    // Do something after Player model loaded;
    console.log(obj);
    obj.traverse(function (child) {
      if (child instanceof __WEBPACK_IMPORTED_MODULE_0_three_full__["h" /* Mesh */]) {
        child.material.forEach(function (item) {
          item.transparent = true;
        });
      }
    });
    addObjectToScene([obj]);
  })]).then(whenTheAllModelsLoaded);
  var speed = 0.001;

  function update(time) {// if( cubeGroup ) {
    //   cubeGroup.rotation.y += time * speed;
    //   cubeGroup.rotation.z += time * speed;
    // }
  }

  return {
    update: update,
    cubeGroup: cubeGroup,
    pivot: pivot
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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threejs/SceneSubject.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/threejs/threeEntryPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneManager__ = __webpack_require__("./utils/threejs/SceneManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneSubject__ = __webpack_require__("./utils/threejs/SceneSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__("../node_modules/gsap/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(container) {
  var canvas = createCanvas(document, container);
  var sceneManager = new __WEBPACK_IMPORTED_MODULE_0__SceneManager__["a" /* default */](canvas);
  var freeze = true;
  var deg = Math.PI / 180;
  var cubeAnimation = new __WEBPACK_IMPORTED_MODULE_2_gsap__["a" /* TimelineMax */](); //======ANIMATIONS=====//

  cubeAnimation.from(__WEBPACK_IMPORTED_MODULE_1__SceneSubject__["a" /* default */].pivot.rotation, 1, {
    z: 40 * deg,
    x: -10 * deg
  }).pause();
  cubeAnimation.from(__WEBPACK_IMPORTED_MODULE_1__SceneSubject__["a" /* default */].cubeGroup.rotation, 1, {
    y: 245 * deg
  }, '-=1').pause();
  cubeAnimation.from(__WEBPACK_IMPORTED_MODULE_1__SceneSubject__["a" /* default */].cubeGroup.position, 1, {
    y: 0.5,
    z: -5
  }, '-=1').pause(); //======ANIMATIONS=====//

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
    var delt = canvasOffsetTop - window.scrollY + 150;

    if (delt < canvas.offsetHeight) {
      var r = delt * 100 / canvas.offsetHeight / 100;
      cubeAnimation.progress(1 - r);
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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threejs/threeEntryPoint.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f7771bfb807831d993e4.hot-update.js.map