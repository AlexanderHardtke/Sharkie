class ThrowableObject extends MovableObject {
    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];
    IMAGES_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];
    IMAGES_DEATH_GREEN = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.png'
    ];
    IMAGES_DEATH_RED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png'
    ];
    height = 48;
    width = 48;
    speedY = 1;
    gravity = 0.15;
    speed = 8;
    x;
    y;
    poison = false;

    constructor(x, y, otherDirection, poison, color = null) {
        if (poison) {
            super().loadImage(this.IMAGES_POISON_BUBBLE);
            this.poison = true;
        } else if (!poison && color === null) {
            super().loadImage(this.IMAGES_BUBBLE);
        } else if (!poison && color === true) {
            super().loadImage(this.IMAGES_DEATH_GREEN);
        } else if (!poison && color === false) {
            super().loadImage(this.IMAGES_DEATH_RED);
        }
        this.x = x;
        this.y = y;
        this.throw(x, otherDirection);
    }


    /**
     * throws the Object in a direction
     * 
     * @param {number} x the coordinate of the character
     * @param {boolean} otherDirection the direction of the character
     */
    throw(x, otherDirection) {
        if (otherDirection) {
            this.x = x - 122;
        } this.setStoppableInterval(() => {
            if (otherDirection) {
                this.moveLeft();
            } if (!otherDirection) {
                this.moveRight();
            } this.applyNegativeGravity();
        }, 1000 / 60);
    }

    /**
     * applys negative gravity so the object gets faster over time
     */
    applyNegativeGravity() {
        this.y -= this.speedY;
        this.speedY = this.speedY + this.gravity;
    }
}