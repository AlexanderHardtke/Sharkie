class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 140;
    width = 130;
    height = 160;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

     /**
     * 
     * @param {Array} arr - ['img/img1.png', 'img/img2.png']
     */
     loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }
}