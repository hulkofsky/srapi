webpackHotUpdate(4,{

/***/ "./components/Three.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_threeFooter_threeEntryPoint__ = __webpack_require__("./utils/threeFooter/threeEntryPoint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_threeRising_threeEntryPoint__ = __webpack_require__("./utils/threeRising/threeEntryPoint.js");
var _jsxFileName = "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/components/Three.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Three =
/*#__PURE__*/
function (_Component) {
  _inherits(Three, _Component);

  function Three(props) {
    var _this;

    _classCallCheck(this, Three);

    _this = _possibleConstructorReturn(this, (Three.__proto__ || Object.getPrototypeOf(Three)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Three, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        switch (objName) {
          case 'cube_rising':
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_threeRising_threeEntryPoint__["a" /* default */])(this.threeRootElement, this.props.objName);
            break;

          case 'cube_footer':
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_threeFooter_threeEntryPoint__["a" /* default */])(this.threeRootElement, this.props.objName);
            break;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "three-container",
        id: this.props.objName,
        ref: function ref(element) {
          return _this2.threeRootElement = element;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Three;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Three;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Three, "Three", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/components/Three.jsx");
  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/components/Three.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/threeRising/GeneralLights.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(scene) {
  var ambientLight = new __WEBPACK_IMPORTED_MODULE_0_three_full__["a" /* AmbientLight */](0xFFFFFF, 1);
  var lightOut = new __WEBPACK_IMPORTED_MODULE_0_three_full__["l" /* PointLight */]("#FFFFFF", 1);
  ambientLight.position.set(100, 100, 100);
  lightOut.position.set(100, 100, 100);
  scene.add(ambientLight); // scene.add(lightOut);

  var rad = 80;

  function update(time) {// const x = rad * Math.sin(time * 0.2);
    // ambientLight.position.x = x;
  }

  return {
    update: update
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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threeRising/GeneralLights.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/threeRising/SceneManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneSubject__ = __webpack_require__("./utils/threeRising/SceneSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GeneralLights__ = __webpack_require__("./utils/threeRising/GeneralLights.js");
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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threeRising/SceneManager.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/threeRising/SceneSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../node_modules/gsap/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(scene) {
  var deg = Math.PI / 180;
  var pivot = new __WEBPACK_IMPORTED_MODULE_0_three_full__["j" /* Object3D */]();
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
  cubeGroup.rotation.set(36 * deg, 225.05 * deg, 0); //======ANIMATIONS=====//

  var cubeRisingAnim = new __WEBPACK_IMPORTED_MODULE_1_gsap__["a" /* TimelineMax */]();
  cubeRisingAnim.from(pivot.rotation, 1, {
    z: 40 * deg,
    x: -10 * deg
  }).pause();
  cubeRisingAnim.from(cubeGroup.rotation, 1, {
    y: 245 * deg
  }, '-=1').pause();
  cubeRisingAnim.from(cubeGroup.position, 1, {
    y: 0.5,
    z: -5
  }, '-=1').pause();
  window.cubeRisingAnim = cubeRisingAnim; //======ANIMATIONS=====//
  //===== GLOBAL ==== ///
  // window.cubeGroup = cubeGroup;
  // window.cubeBack = cubeBack;
  // window.pivot = pivot;
  //===== GLOBAL ==== ///

  var loaderObj = new __WEBPACK_IMPORTED_MODULE_0_three_full__["i" /* OBJLoader */]();
  var loaderMtl = new __WEBPACK_IMPORTED_MODULE_0_three_full__["g" /* MTLLoader */]();

  var getCube = function getCube(modelName) {
    return new Promise(function (resolve) {
      loaderMtl.load('/static/obj/cube_rising.mtl', function (materials) {
        materials.preload();
        loaderObj.setMaterials(materials);
        loaderObj.load('/static/obj/cube_rising.obj', function (obj) {
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

  reactHotLoader.register(_default, "default", "/Users/Dima/Desktop/web/git/vitamin/future-generation/front/utils/threeRising/SceneSubject.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/threeRising/threeEntryPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneManager__ = __webpack_require__("./utils/threeRising/SceneManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../node_modules/gsap/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(container, objName) {
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
//# sourceMappingURL=4.99c078cbae82d9e0f630.hot-update.js.map