import * as THREE from 'three';

export default scene => {
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const speed = 0.1;

  function update(time) {
    cube.rotation.y = time * speed;
  }

  return {
    update
  };
}