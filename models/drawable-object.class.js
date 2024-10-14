/**
 * the parent of all things that gets drawn onto the canvas
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 140;
    width = 143;
    height = 176;
    intervalIds = [];

    /**
     * The source of the image that needs to be loaded
     * 
     * @param {string} path the path to the image 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

     /**
     * The source of the images that needs to be loaded for animation
     * 
     * @param {Array} arr an array of paths to the images
     */
     loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    /**
     * gives every interval an ID to make it stoppable
     * 
     * @param {*} fn 
     * @param {*} time 
     */
    setStoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }

    /**
     * stops all stoppableintervals from the game
     */
    stopAllInterval() {
        this.intervalIds.forEach(clearInterval);
    }
}