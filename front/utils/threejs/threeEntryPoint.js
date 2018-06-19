import SceneManager from './SceneManager';
import { TimelineMax, Linear } from 'gsap';

export default container => {
  const canvas = createCanvas(document, container);
  const sceneManager = new SceneManager(canvas);
  const freeze = true;
  const deg = Math.PI / 180;
  let canvasHalfWidth;
  let canvasHalfHeight;
  let canvasOffsetTop;

  bindEventListeners();
  render();
  setTimeout(()=>{
    sceneManager.update();
  }, 3000);
  sceneManager.update();

  function createCanvas(document, container) {
    const canvas = document.createElement('canvas');
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
    let yPosition = 0;
    while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    canvasOffsetTop = yPosition;
  }


  function scrollCanvas(e) {
    const delt = canvasOffsetTop - window.scrollY + 150;

    if (delt < (canvas.offsetHeight)) {
      const r = ((delt * 100) / canvas.offsetHeight) / 100;
      window.cubeAnimation.progress(1-r);
    }

    sceneManager.update();
  }

  function render(time) {
    requestAnimationFrame(render);
    !freeze ? sceneManager.update() : false;
  }
}