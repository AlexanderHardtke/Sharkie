class ThrowableObject extends MovableObject {
    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];
    IMAGES_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];
    height = 33;
    width = 33;
    speedY = 1;
    gravity = 0.15;
    speed = 8;
    x;
    y;


    constructor(x, y, otherDirection, poison) {
        if (poison) {
            super().loadImage(this.IMAGES_POISON_BUBBLE);
        } else {
            super().loadImage(this.IMAGES_BUBBLE);
        }
        this.x = x;
        this.y = y;
        this.throw(x, otherDirection);
    }


    throw(x, otherDirection) {
        if (otherDirection) {
            this.x = x - 100;
        } setInterval(() => {
            if (otherDirection) {
                this.moveLeft();
            } if (!otherDirection) {
                this.moveRight();
            } this.applyNegativeGravity();
        }, 1000 / 60);
    }

    applyNegativeGravity() {
        this.y -= this.speedY;
        this.speedY = this.speedY + this.gravity;
    }
}