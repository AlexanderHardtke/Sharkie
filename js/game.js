let canvas;
let world;
let keyboard = new Keyboard();
let audioManager = new AudioManager();
let levels = [level0, level1];
let loadedLevel;

/**
 * loads the keyboard and the canvas into the world
 */
function init() {
    gameIntroductionScreen();
    canvas = document.getElementById('canvas');
}


/**
 * loads the Level into the game
 * 
 * @param {Boolean} turtorial checks if The User starts the Turtorial or a normal Level
 */
function startGame(turtorial) {
    let level;
    if (turtorial) level = level0;
    else level = level1;
    loadedLevel = cloneLevel(level);
    document.getElementById('muteButton').style.display = "block";
    document.getElementById('introductionScreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    world = new World(canvas, keyboard, level, audioManager);
}

/**
 * restarts the current level
 */
function restartGame() {
    document.getElementById('restartGame').style.display = "none";
    document.getElementById('gameOverScreen').style.display = "none";
    let level = cloneLevel(loadedLevel);
    stopCurrentLevel();
    world = new World(canvas, keyboard, level, audioManager);
}

/**
 * Starts the next level
 */
function startNextLevel() {
    let currentLevel = world.level.number;
    currentLevel++;
    let nextLevel = levels[currentLevel];
    loadedLevel = cloneLevel(nextLevel);
    document.getElementById('nextLevel').style.display = "none";
    document.getElementById('gameOverScreen').style.display = "none";
    stopCurrentLevel();
    world = new World(canvas, keyboard, nextLevel, audioManager);
}

/**
 * stops the current Level
 */
function stopCurrentLevel() {
    if (world) {
        world.character.x = -50000;
        world.keyboard = [];
        world.level.enemies = [];
        world.level.collectables = [];
        world.level.backgroundObject = [];
        world.audioManager.stopAllAudios();
    }
}

/**
 * shows the Intoduction screen for the game
 */
function gameIntroductionScreen() {
    document.getElementById('introductionScreen').style.display = "flex";
}

/**
 * defines fullscreen and checks the orientation
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    calculateFullscreen();
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
    else document.getElementById('canvas').style.height = `100%`;
}

/**
 * enters the fullscreen mode for the game game in all browsers
 * 
 * @param {element} element the fullscreen element
 */
function enterFullscreen(element) {

    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
}

/**
 * calculates the fullscreen to the maximum width or height depending on the screen
 */
function calculateFullscreen() {
    let widthToHeight = window.innerWidth / window.innerHeight;
    document.getElementById('canvas').style.maxWidth = `100%`;
    document.getElementById('canvas').style.maxHeight = `100%`;
    if (widthToHeight < 1.5) {
        document.getElementById('canvas').style.width = `100%`;
        document.getElementById('canvas').style.height = `auto`;
    } else {
        document.getElementById('canvas').style.height = `100%`;
        document.getElementById('canvas').style.width = `auto`;
    }
}

/**
 * exit the fullscreen mode for the game snd shows the game in a window
 */
function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
}

/**
 * Eventlistener for pressing inputs with the keyboard from the user
 */
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') keyboard.SPACE = true;
    if (event.code === 'KeyW' || event.code === 'ArrowUp') keyboard.UP = true;
    if (event.code === 'KeyS' || event.code === 'ArrowDown') keyboard.DOWN = true;
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') keyboard.LEFT = true;
    if (event.code === 'KeyD' || event.code === 'ArrowRight') keyboard.RIGHT = true;
    if (event.code === 'KeyQ' || event.code === 'KeyC') keyboard.Q = true;
    if (event.code === 'KeyE' || event.code === 'KeyV') keyboard.E = true;
});

/**
 * Eventlistener for releasing inputs with the keyboard from the user 
 */
window.addEventListener('keyup', (event) => {
    if (event.code === 'Space') keyboard.SPACE = false;
    if (event.code === 'KeyW' || event.code === 'ArrowUp') keyboard.UP = false;
    if (event.code === 'KeyS' || event.code === 'ArrowDown') keyboard.DOWN = false;
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') keyboard.LEFT = false;
    if (event.code === 'KeyD' || event.code === 'ArrowRight') keyboard.RIGHT = false;
    if (event.code === 'KeyQ' || event.code === 'KeyC') keyboard.Q = false;
    if (event.code === 'KeyE' || event.code === 'KeyV') keyboard.E = false;
});

/**
 * emulates the keyboard for mobile users
 * 
 * @param {string} key the Button that is pressed and emulates the key
 * @param {Boolean} isPressed if the Button is pressed or not
 */
function button(key, isPressed) {
    keyboard[key] = isPressed;
}

/**
 * Toggles all Sounds in the game
 */
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

/**
 * Clones the current Level
 * 
 * @param {Object} level the Object level with all informations
 * @returns the cloned Level
 */
function cloneLevel(level) {
    const clonedEnemies = level.enemies.map(enemy => {
        const clonedEnemy = Object.create(
            Object.getPrototypeOf(enemy), 
            Object.getOwnPropertyDescriptors(enemy)
        );

        // Animationen und Timer müssen neu gestartet werden
        if (clonedEnemy.animate) {
            clonedEnemy.animate(); // Animation und Bewegung neu starten
        }

        return clonedEnemy;
    });

    const clonedCollectables = level.collectables.map(item => {
        const clonedItem = Object.create(
            Object.getPrototypeOf(item), 
            Object.getOwnPropertyDescriptors(item)
        );

        // Falls Collectables Animationen haben
        if (clonedItem.animate) {
            clonedItem.animate(); // Animation neu starten
        }

        return clonedItem;
    });

    const clonedBackgroundObjects = level.backgroundObject.map(bg => {
        const clonedBg = Object.create(
            Object.getPrototypeOf(bg), 
            Object.getOwnPropertyDescriptors(bg)
        );

        // Falls Hintergrundobjekte Animationen haben
        if (clonedBg.animate) {
            clonedBg.animate(); // Animation neu starten
        }

        return clonedBg;
    });

    return new Level(
        level.spawnEndboss,
        clonedEnemies,
        clonedCollectables,
        clonedBackgroundObjects,
        level.level_end_x,
        level.number
    );
}
// function cloneLevel(level) {
//     return new Level(
//         level.spawnEndboss,
//         level.enemies.map(enemy => Object.create(Object.getPrototypeOf(enemy), Object.getOwnPropertyDescriptors(enemy))),
//         level.collectables.map(item => Object.create(Object.getPrototypeOf(item), Object.getOwnPropertyDescriptors(item))),
//         level.backgroundObject.map(bg => Object.create(Object.getPrototypeOf(bg), Object.getOwnPropertyDescriptors(bg))),
//         level.level_end_x,
//         level.number
//     )
// };

/**
* shows the game over screen for the current level or situation
* 
* @param {boolean} win true if the game is beaten
* @param {number} level the number of the level
*/
function gameOverScreen(win, level) {
    if (win && level == 0) {
        world.character.stopAllInterval();
        document.getElementById('gameOverImg').src = "img/6.Botones/Tittles/You win/Recurso 21.png";
        document.getElementById('nextLevel').style.display = "flex";
    } else if (win && level == 1) {
        world.character.stopAllInterval();
        document.getElementById('gameOverImg').src = "img/6.Botones/Try again/Mesa de trabajo 1.png";
        document.getElementById('gameOverImg').style.width = "90%"
    } else if (!win) document.getElementById('restartGame').style.display = "flex";
    document.getElementById('gameOverScreen').style.display = "flex";
}