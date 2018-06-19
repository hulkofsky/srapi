webpackHotUpdate(4,{

/***/ "./utils/threejs/SceneSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_full__ = __webpack_require__("../node_modules/three-full/builds/Three.es.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/next/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

 // import OBJLoader2 from './OBJLoader2'

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
  cubeGroup.rotation.set(36 * deg, 225.1 * deg, 0); //===== GLOBAL ==== ///

  window.cubeGroup = cubeGroup;
  window.cubeBack = cubeBack;
  window.pivot = pivot; //===== GLOBAL ==== ///

  console.log(cubeGroup);
  var loader = new __WEBPACK_IMPORTED_MODULE_0_three_full__["n" /* TextureLoader */](); // loader.load('static/images/cube_text_big.png', function ( texture ) {
  //   const cubeMaterials = [
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}),
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}), // left
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}), // top
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}),
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}), // right
  //     new THREE.MeshBasicMaterial({ map: texture, transparent: true, overdraw: 0.5}),
  //   ];
  //
  //   const cubeMaterialsBack = [
  //     new THREE.MeshBasicMaterial({ color:0x191715 }),
  //     new THREE.MeshBasicMaterial({ color:0x363234 }), // left
  //     new THREE.MeshBasicMaterial({ color:0x191715 }), // top
  //     new THREE.MeshBasicMaterial({ color:0x191715 }),
  //     new THREE.MeshBasicMaterial({ color:0x231f20 }), // right
  //     new THREE.MeshBasicMaterial({ color:0x363234 }),
  //   ];
  //
  //   cube = new THREE.Mesh(geometry, cubeMaterials);
  //   cube.rotation.set(36*deg, 43*deg, 0);
  //
  //   const leftFace = cube.material[1];
  //   const topFace = cube.material[2];
  //   const rightFace = cube.material[3];
  //
  //   leftFace.map.repeat.set(3, 3);
  //   topFace.map.repeat.set(3, 3);
  //   rightFace.map.repeat.set(3, 3);
  //
  //   leftFace.map.center.set(-0.15, 0.15);
  //   topFace.map.center.set(-0.15, 0.15);
  //   console.log(leftFace.map);
  //   topFace.map.rotation = -45*deg;
  //
  //   cubeBack = new THREE.Mesh(geometry, cubeMaterialsBack);
  //   cubeBack.rotation.set(36*deg, 43*deg, 0);
  //
  //   cubeGroup.position.set(1, -2, 0);
  //   cubeGroup.rotation.set(-2*deg, -2*deg, -2*deg);
  //
  //   cubeGroup.add(cube);
  //   cubeGroup.add(cubeBack);
  //
  //   scene.add(cubeGroup);
  //   console.log(cubeGroup);
  // });
  // const loaderObj = new THREE.OBJLoader2();
  // const getCube = (modelName) => {
  //
  //   if (typeof faceobj === 'undefined' && typeof modelurl === 'undefined') {
  //
  //   }
  //
  //   return new Promise((resolve) => {
  //
  //     const callbackOnLoad = (event) => {
  //       const obj = event.detail.loaderRootNode;
  //
  //       obj.traverse(function (child) {
  //         if (child instanceof THREE.Mesh) {
  //
  //           // child.geometry.translate( -90, -82, -23 );
  //           // child.rotation.z = Math.PI
  //           // child.material.side = THREE.DoubleSide;
  //           // const tempGeo = new Geometry().fromBufferGeometry(child.geometry);
  //           // tempGeo.computeVertexNormals();
  //           // tempGeo.mergeVertices();
  //           // child.geometry = new BufferGeometry().fromGeometry(tempGeo);
  //
  //
  //         }
  //       })
  //
  //       resolve(obj)
  //     };
  //
  //
  //     const onLoadMtl = ( materials ) => {
  //       loaderObj.setModelName( 'face1' );
  //       loaderObj.setMaterials( materials );
  //       loaderObj.load('/static/obj/cube.obj', callbackOnLoad, null, null, null, false );
  //     };
  //
  //     onLoadMtl()
  //   })
  //
  // };

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
//# sourceMappingURL=4.3e26e5e73bd2a1a76055.hot-update.js.map