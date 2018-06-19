import * as THREE from 'three-full';

export default scene => {

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
  const lightOut = new THREE.PointLight("#FFFFFF", 1);
  ambientLight.position.set(100,100,100);
  lightOut.position.set(100,100,100);

  scene.add(ambientLight);
  // scene.add(lightOut);

  const rad = 80;

  function update(time) {
    // const x = rad * Math.sin(time * 0.2);
    // ambientLight.position.x = x;
  }

  return {
    update
  };
}