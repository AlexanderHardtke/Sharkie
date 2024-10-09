class Endboss extends MovableObject {
    width = 1041 * 0.3;
    height = 1216 * 0.3;
    speed = 3;
    offsetX = 30;
    offsetY = 120;
    IMAGES_INTRODUCTION = [
        'img/2.Enemy/3 Final Enemy/1.introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/10.png'
    ];
    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/1.png',
        'img/2.Enemy/3 Final Enemy/Dead/2.png',
        'img/2.Enemy/3 Final Enemy/Dead/3.png',
        'img/2.Enemy/3 Final Enemy/Dead/4.png',
        'img/2.Enemy/3 Final Enemy/Dead/5.png',
        'img/2.Enemy/3 Final Enemy/Dead/6.png'
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    constructor(spawn) {
        super().loadImage(this.IMAGES_INTRODUCTION[0]);
        this.loadImages(this.IMAGES_INTRODUCTION);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.y = 0;
        this.x = spawn + 470;
        this.animate(spawn);
    }


    animate() {
        setInterval(() => {
            if (this.charIsUp) {
                this.moveUp();
            } if (this.charIsDown) {
                this.moveDown();
            } if (this.charIsLeft) {
                this.moveLeft();
                this.otherDirection = false;
            } if (this.charIsRight) {
                this.moveRight();
                this.otherDirection = true;
            }
        }, 1000 / 60)

        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_INTRODUCTION);
            } else if (i > 10) {
                this.playAnimation(this.IMAGES_IDLE);
            }
            i++;
        }, 250);
    }

}