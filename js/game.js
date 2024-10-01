let canvas;
let world;
let keyboard = new Keyboard();

/**
 * loads the keyboard and the canvas into the world
 */
function init() {
    gameIntroductionScreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function gameIntroductionScreen() {
    document.getElementById('introductionScreen').style.display="flex"; 
}

/**
 * defines fullscreen and checks the orientation
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
    checkOrientation();
}

/**
 * checks the orientation of the device and sets the canvas to 100%
 */
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

/**
 * enters the fullscreen mode for the game game in all browsers
 * 
 * @param {element} element the fullscreen element
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

/**
 * exit the fullscreen mode for the game snd shows the game in a window
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * Eventlistener for pressing inputs with the keyboard from the user
 */
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        keyboard.SPACE = true;
    } if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        keyboard.UP = true;
    } if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        keyboard.DOWN = true;
    } if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        keyboard.LEFT = true;
    } if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        keyboard.RIGHT = true;
    } if (event.code === 'KeyQ' || event.code === 'KeyC') {
        keyboard.Q = true;
    } if (event.code === 'KeyE' || event.code === 'KeyV') {
        keyboard.E = true;
    }
});

/**
 * Eventlistener for releasing inputs with the keyboard from the user 
 */
window.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        keyboard.SPACE = false;
    } if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        keyboard.UP = false;
    } if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        keyboard.DOWN = false;
    } if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        keyboard.LEFT = false;
    } if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        keyboard.RIGHT = false;
    } if (event.code === 'KeyQ' || event.code === 'KeyC') {
        keyboard.Q = false;
    } if (event.code === 'KeyE' || event.code === 'KeyV') {
        keyboard.E = false;
    }
});

function button(key, isPressed) {
    keyboard[key] = isPressed;
}

// Sound wenn Verletzt etc
// Alle Sounds Lautstärke verrringern
// Collision besser machen
// Endgegner besiegen
// Fullscreen
// Quallen einbubbeln
// Erklärung Start-Screen