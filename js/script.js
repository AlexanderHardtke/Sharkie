/**
 * This function takes you back to the previous window.
 */
function goBack() {
    window.history.back();
}

/**
 * shows the Intoduction screen for the game
 */
function gameIntroductionScreen() {
    document.getElementById('introductionScreen').style.display = "flex";
}

/**
 * toggles the fullscreen modus and highlights the button
 */
function toggleFullscreen() {
    let toggleButton = document.querySelector('.fullscreenButton')
    let toggleIcon = document.querySelector('.fullscreenIcon')
    fullscreenActive = !fullscreenActive
    if (fullscreenActive) {
        toggleButton.classList.add('active');
        toggleIcon.classList.add('active');
        if (world) checkfullscreen();
    } else {
        toggleButton.classList.remove('active');
        toggleIcon.classList.remove('active');
    }
}

/**
 * toggles the muteButton
 */
function toggleMuteButton() {
    let mute = document.getElementById('mute');
    let unmute = document.getElementById('unmute');
    soundActive = !soundActive;
    if (!soundActive) {
        unmute.classList.add('dNone');
        mute.classList.remove('dNone');
    } else {
        mute.classList.add('dNone');
        unmute.classList.remove('dNone');
    }
    checkMuteButton();
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