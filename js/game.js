let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
    checkOrientation();
}

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }


window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        keyboard.SPACE = true;
    }
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        keyboard.UP = true;
    }
    if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        keyboard.RIGHT = true;
    }
});


window.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        keyboard.SPACE = false;
    }
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        keyboard.RIGHT = false;
    }
});