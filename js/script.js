let PleaseRotate = {},
    currentOrientation = null,
    initialize = false;
let options = {
    startOnPageLoad: true,
    onHide: function () { },
    onShow: function () { },
    forcePortrait: false,
    message: "Please Rotate Your Device",
    subMessage: "(or click to continue)",
    allowClickBypass: true,
    onlyMobile: true,
    zIndex: 99,
    iconNode: null
};
PleaseRotate.Showing = false;

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

/**
 * tests if the device the user is currently on is mobile
 * 
 * @returns true if mobile
 */
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * checks if the page is opened with mobile device and activates the control buttons for mobile use
 */
window.addEventListener('load', function () {
    if (options.startOnPageLoad) PleaseRotate.start();
    let controls = document.getElementById('bottomWrapper');
    let fullscrBtn = document.getElementById('fullscreenButtons');
    if (isMobileDevice()) {
        fullscrBtn.style.display = 'none';
        controls.style.display = 'flex';
    } else {
        fullscrBtn.style.display = 'block';
        controls.style.display = 'none';
    }
});

/**
 * updates the new options for the display
 * 
 * @param {Object} updates the new options
 */
function overrideOptions(updates) {
    for (let prop in updates) options[prop] = updates[prop];
}

/**
 * sets the CSS-class of the body
 * 
 * @param {string} state the state it has to be set 
 */
function setBodyClass(state) {
    let className = document.documentElement.className.replace(/(?:^|\s)pleaserotate-\S*/g, '');
    document.documentElement.className = `${className} pleaserotate-${state}`;
}

/**
 * creates one HTML Elements
 */
function createElement(tag, attributes = {}) {
    let element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
}

/**
 * creates all HTML Elements for the pleaserotate screen
 */
function createElements() {
    let backdrop = createElement("div", { id: "pleaserotate-backdrop" });
    let container = createElement("div", { id: "pleaserotate-container" });
    let message = createElement("div", { id: "pleaserotate-message" });
    let subMessage = createElement("small");
    backdrop.appendChild(container);
    container.appendChild(options.iconNode || createPhoneSVG());
    container.appendChild(message);
    message.appendChild(document.createTextNode(options.message));
    subMessage.appendChild(document.createTextNode(options.subMessage));
    message.appendChild(subMessage);
    document.body.appendChild(backdrop);
}

/**
 * creates the SVG-element for the phone symbol
 * 
 * @returns the SVG-Element
 */
function createPhoneSVG() {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'pleaserotate-graphic');
    svg.setAttribute('viewBox', '0 0 250 250');
    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    if (options.forcePortrait) group.setAttribute('transform', 'rotate(-90 125 125)');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M190.5,221.3c0,8.3-6.8,15-15,15H80.2c-8.3,0-15-6.8-15-15V28.7' +
        'c0-8.3,6.8-15,15-15h95.3c8.3,0,15,6.8,15,15V221.3z' +
        'M74.4,33.5l-0.1,139.2c0,8.3,0,17.9,0,21.5c0,3.6,0,6.9,' +
        '0,7.3c0,0.5,0.2,0.8,0.4,0.8s7.2,0,15.4,0h75.6c8.3,0,15.1,0,15.2,0');
    group.appendChild(path);
    svg.appendChild(group);
    return svg;
}

/**
 * hides the please rotate Funktion
 * 
 * @param {Boolean} visible true if pleaseRoate is shown
 */
function setVisibility(visible) {
    let backdropElement = document.getElementById("pleaserotate-backdrop");
    if (backdropElement) backdropElement.style.display = visible ? "block" : "none";
}

/**
 * controls what happens if the orientation of the screen is changed
 */
function orientationChanged() {
    let shouldShow = currentOrientation && !options.forcePortrait || !currentOrientation && options.forcePortrait;
    let propagate = shouldShow ? options.onShow() : options.onHide();
    setBodyClass(shouldShow ? "showing" : "hiding");
    if (propagate === undefined || propagate) {
        PleaseRotate.Showing = shouldShow;
        setVisibility(shouldShow);
    }
}

/**
 * checks if the scrren is in portrait or landscape modus
 * 
 * @returns true if on portrait modus
 */
function isPortrait() {
    return window.innerWidth < window.innerHeight;
}

/**
 * checks if the orientation of the device has changed
 * 
 * @returns stopps the function if nothing has changed
 */
function checkOrientationChange() {
    if (!isMobileDevice() && options.onlyMobile) {
        if (!initialize) {
            initialize = true;
            setVisibility(false);
            setBodyClass("hiding");
            options.onHide();
        } return;
    }
    if (currentOrientation !== isPortrait()) {
        currentOrientation = isPortrait();
        orientationChanged();
    }
}

/**
 * starts the info to rotate Funktion to show the menu
 * 
 * @param {Object} opts options for the change
 * @returns stopps the function
 */
PleaseRotate.start = function (opts) {
    if (!document.body) return window.addEventListener('load', () => PleaseRotate.start(opts));
    if (opts) overrideOptions(opts);
    createElements();
    checkOrientationChange();
    window.addEventListener('resize', checkOrientationChange, false);
    if (options.allowClickBypass) {
        document.getElementById("pleaserotate-backdrop").onclick = handleBackdropClick;
    }
};

/**
 * creates the onclick Funktion for ignoring the message
 */
function handleBackdropClick() {
    let propagate = options.onHide();
    setBodyClass("hiding");
    PleaseRotate.Showing = false;
    if (propagate === undefined || propagate) setVisibility(false);
}

/**
 * stops the please rotate Funktion to show the menu
 */
PleaseRotate.stop = function () {
    window.removeEventListener('resize', checkOrientationChange, false);
};

/**
 * registers a function that gets executed to show a message for the user
 * 
 * @param {function} fn the function that should be executed
 */
PleaseRotate.onShow = function (fn) {
    options.onShow = fn;
    if (initialize) {
        initialize = false;
        currentOrientation = null;
        checkOrientationChange();
    }
};

/**
 * hides the please rotate screen
 * 
 * @param {function} fn the function that should be executed
 */
PleaseRotate.onHide = function (fn) {
    options.onHide = fn;
    if (initialize) {
        currentOrientation = null;
        initialize = false;
        checkOrientationChange();
    }
};








/////// Verhindere Buttons auf Smartphone

{/* <script type="text/javascript">
    $(document).ready(function () {
        //Disable cut copy paste
        $('body').bind('cut copy', function (e) {          
            if(e.target.id != "allow") {
                e.preventDefault();
            }
        });
     
        //Disable mouse right click
        $("body").on("contextmenu",function(e){
            return false;
        });
       
        $("button[type=reset]").on("click",function(e){
            history.back();
        });
             
       
    });
    </script> */}