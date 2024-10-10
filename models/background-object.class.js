class BackgroundObject extends DrawableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        if (y) {
            this.y = y;
        } else {
            this.y = 480 - this.height;
        }
    }
}