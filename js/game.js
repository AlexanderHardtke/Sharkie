let canvas;
let world;
let keyboard = new Keyboard();
let audioManager = new AudioManager();
let levels = [level0, level1, level2];
let loadedLevel;

/**
 * loads the keyboard and the canvas into the world
 */
function init() {
    gameIntroductionScreen();
    canvas = document.getElementById('canvas');
}

function startGame(turtorial) {
    let level;
    if (turtorial) {
        level = level0;
    } else {
        level = level1;
    }
    loadedLevel = cloneLevel(level);  // Hier wird das Level korrekt geklont
    document.getElementById('introductionScreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    world = new World(canvas, keyboard, loadedLevel, audioManager);  // Verwendet das geklonte Level
}

function restartGame() {
    document.getElementById('restartGame').style.display = "none";
    document.getElementById('gameOverScreen').style.display = "none";
    stopCurrentLevel();
    let level = cloneLevel(loadedLevel);  // Level neu klonen
    world = new World(canvas, keyboard, level, audioManager);
}

function startNextLevel() {
    let currentLevel = world.level.number;
    currentLevel++;
    let nextLevel = levels[currentLevel];
    document.getElementById('nextLevel').style.display = "none";
    document.getElementById('gameOverScreen').style.display = "none";
    stopCurrentLevel();
    world = new World(canvas, keyboard, nextLevel, audioManager);
}

function stopCurrentLevel() {
    if (world) {
        world.level.enemies = [];
        world.level.collectables = [];
        world.level.backgroundObject = [];
        world.audioManager.muteAllAudios();
        world.level;
        world = [];
    }
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
    document.getElementById('canvas').style.width = `100%`;
    document.getElementById('canvas').style.maxWidth = `100%`;
    document.getElementById('canvas').style.maxHeight = `100%`;
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
    world.audioManager.isMuted = !world.audioManager.isMuted;
    let mute = document.getElementById('mute');
    let unmute = document.getElementById('unmute');
    if (world.audioManager.isMuted) {
        world.audioManager.muteAllAudios();
        unmute.classList.add('dNone');
        mute.classList.remove('dNone');
    } else {
        world.audioManager.unmuteAllAudios();
        mute.classList.add('dNone');
        unmute.classList.remove('dNone');
    }
}

// function cloneLevel(level) {
//     console.log("Original Level:", level); // Zeige das Original-Level an

//     const clonedLevel = new Level(
//         level.spawnEndboss,
//         (level.enemies || []).map(enemy => new (enemy.constructor)(...Object.values(enemy))),
//         (level.items || []).map(item => new (item.constructor)(...Object.values(item))),
//         (level.backgroundObjects || []).map(bg => new BackgroundObject(bg.imagePath, bg.x)),
//         level.level_end_x,
//         level.number
//     );

//     console.log("Cloned Level:", clonedLevel); // Zeige das geklonte Level an
//     return clonedLevel;
// }

function cloneLevel(level) {
    console.log("Original Level:", level);

    const clonedLevel = new Level(
        level.spawnEndboss,
        JSON.parse(JSON.stringify(level.enemies)), // Einfache Tiefenkopie
        JSON.parse(JSON.stringify(level.items)),
        JSON.parse(JSON.stringify(level.backgroundObjects.map(bg => ({ imagePath: bg.imagePath, x: bg.x })))),
        level.level_end_x,
        level.number
    );

    console.log("Cloned Level:", clonedLevel);
    return clonedLevel;
}