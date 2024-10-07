let canvas;
let world;
let keyboard = new Keyboard();


/**
 * loads the keyboard and the canvas into the world
 */
function init() {
    gameIntroductionScreen();
    canvas = document.getElementById('canvas');
}

function startGame() {
    document.getElementById('introductionScreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    world = new World(canvas, keyboard);
}

function gameIntroductionScreen() {
    document.getElementById('introductionScreen').style.display = "flex";
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

function toggleMuteButton() {
    let mute = document.getElementById('mute');
    let unmute = document.getElementById('unmute');
    if (world.isMuted) {
        unmute.classList.add('dNone');
        mute.classList.remove('dNone');
    } else {
        mute.classList.add('dNone');
        unmute.classList.remove('dNone');
    }
}

function toggleMute() {
    world.isMuted = !world.isMuted;
    world.sounds.forEach(sound => {
        if (world.isMuted) {
            sound.volume = 0;
            toggleMuteButton();
        } else {
            sound.volume = 0.15;
            toggleMuteButton();
        }
    });
}

// Sound wenn Verletzt etc
// Alle Sounds Lautstärke verrringern
// Endgegner besiegen
// Fullscreen
// Quallen einbubbeln
// Collission am Ende wenn alle Größen fix