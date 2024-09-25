class BarrierLevelend extends MovableObject {
    width = 441 * 0.5;
    height = 906 * 0.5;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 440 - this.height;
    }
}