class ThrowableObject extends MovableObject {
    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];
    IMAGES_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];
    height = 40;
    width = 40;
    speedY = 1;
    gravity = 0.3;
    speed = 7;
    x;
    y;


    constructor() {
        super().loadImage(this.IMAGES_BUBBLE);
        this.loadImage(this.IMAGES_POISON_BUBBLE);
        this.throw(200, 250);
    }


    throw(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.applyNegativeGravity();
            this.moveRight();
        }, 1000 / 60);
    }

    applyNegativeGravity() {
            this.y -= this.speedY;
            this.speedY = this.speedY + this.gravity;
    }
}