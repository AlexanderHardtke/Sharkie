let canvas;
let world;
let keyboard = new Keyboard();
let audioManager = new AudioManager();
let levels = [level0, level1];
let loadedLevel;
let fullscreenActive = false;
let soundActive = true;
let worldIsResetting = false;

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
    document.getElementById('introductionScreen').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    world = new World(canvas, keyboard, loadedLevel, audioManager);
    checkfullscreen();
    checkMuteButton();
}

/**
 * goes back to the main menu
 */
function backToMenu() {
    hideOverlay();
    document.getElementById('introductionScreen').style.display = "flex";
    document.getElementById('canvas').style.display = "none";
}

/**
 * restarts the current level
 */
async function restartGame() {
    let currentLevel = world.level.number;
    stopCurrentLevel();
    hideOverlay();
    let level = levels[currentLevel];
    loadedLevel = await cloneLevel(level);
    world = new World(canvas, keyboard, loadedLevel, audioManager);
}

/**
 * Starts the next level
 */
async function startNextLevel() {
    let currentLevel = world.level.number;
    currentLevel++;
    stopCurrentLevel();
    let nextLevel = levels[currentLevel];
    loadedLevel = await cloneLevel(nextLevel);
    hideOverlay();
    world = new World(canvas, keyboard, loadedLevel, audioManager);
}

/**
 * stops the current Level
 */
function stopCurrentLevel() {
    if (world) {
        world.character = [];
        world.keyboard = [];
        world.statusBar = [];
        world.level.enemies = [];
        world.level.collectables = [];
        world.level.backgroundObject = [];
        world.audioManager.stopAllAudios();
    }
}

/**
 * checks the muteButton and toggles the audiomanager
 */
function checkMuteButton() {
    if (!soundActive && world) {
        world.audioManager.isMuted = true;
        world.audioManager.muteAllAudios();
    } if (soundActive && world) {
        world.audioManager.isMuted = false;
        world.audioManager.unmuteAllAudios();
    }
}

/**
 * defines fullscreen and checks the orientation
 */
function checkfullscreen() {
    if (fullscreenActive) {
        let fullscreen = document.getElementById('fullscreen');
        calculateFullscreen();
        enterFullscreen(fullscreen);
        checkOrientation();
    }
}

/**
 * stops the background music and shows the game over screen after timeout
 */
function endbossDead() {
    audioManager.stopAudio('audio/background_music.mp3')
    setTimeout(() => gameOverScreen(true, world.level.number), 1200);
    worldIsResetting = true;
    setTimeout(() => worldIsResetting = false, 6000);
}

/**
 * Eventlistener for leaving the fullscreen modus and removing the highlights from the button
 */
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenActive = false;
        document.querySelector('.fullscreenButton').classList.remove('active');
        document.querySelector('.fullscreenIcon').classList.remove('active');
    }
});

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
 * Clones the current Level
 * 
 * @param {Object} level the Object level with all informations
 * @returns the cloned Level
 */
function cloneLevel(level) {
    return new Level(
        level.spawnEndboss,
        cloneEnemies(level.enemies),
        cloneCollectables(level.collectables),
        cloneBackgroundObjects(level.backgroundObject),
        level.level_end_x,
        level.number
    );
}

/**
 * Clones the enemy and the animate-function in the level
 * 
 * @param {Objects} enemies all enemies in the level
 * @returns the cloned enemies
 */
function cloneEnemies(enemies) {
    return enemies.map(enemy => {
        const clonedEnemy = Object.create(
            Object.getPrototypeOf(enemy),
            Object.getOwnPropertyDescriptors(enemy)
        );
        if (clonedEnemy.animate) clonedEnemy.animate();
        return clonedEnemy;
    });
}

/**
 * clones the collectables and the animate-function in the level 
 * 
 * @param {Objects} collectables all collectables in the level
 * @returns the cloned collectables
 */
function cloneCollectables(collectables) {
    return collectables.map(item => {
        const clonedItem = Object.create(
            Object.getPrototypeOf(item),
            Object.getOwnPropertyDescriptors(item)
        );
        if (clonedItem.animate) clonedItem.animate();
        return clonedItem;
    });
}

/**
 * clones the background in the level
 * 
 * @param {Objects} backgroundObjects all backgrounds in the level
 * @returns the cloned backgrounds
 */
function cloneBackgroundObjects(backgroundObjects) {
    return backgroundObjects.map(bg => Object.create(
        Object.getPrototypeOf(bg),
        Object.getOwnPropertyDescriptors(bg)
    ));
}

/**
 * stops the background music and shows the game over screen after timeout
 */
function characterDead() {
    audioManager.stopAudio('audio/background_music.mp3')
    setTimeout(() => gameOverScreen(false, world.level.number), 2000);
    worldIsResetting = true;
    setTimeout(() => worldIsResetting = false, 6000);
}

/**
* shows the game over screen for the current level or situation
* 
* @param {boolean} win true if the game is beaten
* @param {number} level the number of the level
*/
function gameOverScreen(win, level) {
    showOverlay();
    world.character.stopAllInterval();
    if (win && level == 0) winTurtorial();
    else if (win && level > 0) winLevel();
    else if (!win) looseLevel();
}

function winTurtorial() {
    document.getElementById('nextLevel').style.display = "flex";
}

/**
 * shows the winGame Div
 */
function winLevel() {
    document.getElementById('winGame').style.display = "flex";
    document.getElementById('winGame').style.width = "90%"
}

/**
 * shows the restartGame div
 */
function looseLevel() {
    document.getElementById('restartGame').style.display = "flex";
}

/**
 * shows the Overlay div
 */
function showOverlay() {
    document.getElementById('overlay').style.display = "flex";
}

/**
 * hides all Overlays
 */
function hideOverlay() {
    document.getElementById('nextLevel').style.display = "none";
    document.getElementById('winGame').style.display = "none";
    document.getElementById('restartGame').style.display = "none";
    document.getElementById('overlay').style.display = "none";
}