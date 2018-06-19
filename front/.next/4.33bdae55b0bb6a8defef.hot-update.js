webpackHotUpdate(4,{

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
  var sceneManager = Object(__WEBPACK_IMPORTED_MODULE_1__SceneManager__["a" /* default */])(scene);
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

  window.cubeGroup = cubeGroup;
  window.cubeBack = cubeBack;
  window.pivot = pivot; //===== GLOBAL ==== ///

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
    cubeGroup: cubeGroup
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

/***/ })

})
//# sourceMappingURL=4.33bdae55b0bb6a8defef.hot-update.js.map