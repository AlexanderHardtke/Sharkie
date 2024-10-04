class PufferfishRed extends MovableObject {
    width = 72;
    height = 60;
    speed = 0.2;
    offsetX = 5;
    offsetY = 5;
    moving = 50;
    bubbleRange = 200;
    standardBubbleRange = 200;
    aggresiveBubbleRange = 300;
    otherDirection = false;
    getAggressive = false;
    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];
    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
    ];
    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ];
    IMAGES_DEATH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEATH);
        this.x = 300 + Math.random() * 300;
        this.y = Math.random() * 400;
        this.speed = this.speed + Math.random() * 0.3;
        this.moveLeft();
        this.animate();
    }

    /**
     * animates the red pufferfish
     */
    animate() {
        setInterval(() => {
            if (this.moving < 500) {
                this.moveLeft();
                this.moving++;
                this.otherDirection = false;
            } else if (this.moving < 1000) {
                this.moveRight();
                this.moving++;
                this.otherDirection = true;
            } if (this.moving >= 1000) {
                this.moving = 0;
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.getAggressive) {
                this.playAnimation(this.IMAGES_BUBBLESWIM);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 400)
    }

}