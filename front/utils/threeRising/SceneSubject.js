import * as THREE from 'three-full';
import { TimelineMax } from 'gsap';

export default scene => {
  const deg = Math.PI/180;
  const pivot = new THREE.Object3D();
  const cubeBackMaterials = [
    new THREE.LineBasicMaterial({color: 0x302e2f}), // left
    new THREE.LineBasicMaterial({color: 0x363234}),
    new THREE.LineBasicMaterial({color: 0x191715}), // top
    new THREE.LineBasicMaterial({color: 0x191715}),
    new THREE.LineBasicMaterial({color: 0x231f20}),
    new THREE.LineBasicMaterial({color: 0x231f20}), // right
  ];

  const cubeGeometry = new THREE.BoxGeometry(3.999, 3.999, 3.999);
  const cubeBack = new THREE.Mesh(cubeGeometry, cubeBackMaterials);
        cubeBack.position.set(-1, -1, 1);

  const cubeGroup = new THREE.Group();
        cubeGroup.rotation.set(36*deg, 225.05*deg, 0);

  //======ANIMATIONS=====//
  const cubeRisingAnim = new TimelineMax();
        cubeRisingAnim.from(pivot.rotation, 1, { z:(40 * deg), x: (-10 * deg) }).pause();
        cubeRisingAnim.from(cubeGroup.rotation, 1, { y:(245 * deg) }, '-=1').pause();
        cubeRisingAnim.from(cubeGroup.position, 1, { y: 0.5, z: -5 }, '-=1').pause();
        window.cubeRisingAnim = cubeRisingAnim;
  //======ANIMATIONS=====//


  //===== GLOBAL ==== ///
  // window.cubeGroup = cubeGroup;
  // window.cubeBack = cubeBack;
  // window.pivot = pivot;
  //===== GLOBAL ==== ///

  const loaderObj = new THREE.OBJLoader();
  const loaderMtl = new THREE.MTLLoader();


  const getCube = (modelName) => {
    return new Promise((resolve) => {
      loaderMtl.load('/static/obj/cube_rising.mtl', materials => {

        materials.preload();
        loaderObj.setMaterials(materials);
        loaderObj.load('/static/obj/cube_rising.obj', (obj) => {

          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.forEach((item) => {
                item.color.set(0xFFFFFF);
              })
            }
          })

          resolve(obj)
        })
      })
    })
  };


  const addObjectToScene = (objArr) => {
    cubeGroup.add(cubeBack);
    objArr.forEach(item => {
      cubeGroup.add(item);
    });

    pivot.position.set(0, -0.1, 0);
    pivot.add( cubeGroup );
    scene.add( pivot );
  };


  const whenTheAllModelsLoaded = () => {
    console.log('uploaded');
    scene.background = new THREE.Color('#231f20');
  };

  Promise.all([

    getCube().then(obj => { // Do something after Player model loaded;
      console.log(obj);
      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.forEach((item) => {
            item.transparent = true;
          })
        }
      });

      addObjectToScene([obj]);
    })

  ]).then(whenTheAllModelsLoaded);


  const speed = 0.001;
  function update(time) {
    // if( cubeGroup ) {
    //   cubeGroup.rotation.y += time * speed;
    //   cubeGroup.rotation.z += time * speed;
    // }
  }

  return {
    update,
    cubeGroup,
    pivot
  };
}