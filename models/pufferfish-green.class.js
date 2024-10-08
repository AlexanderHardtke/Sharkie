class PufferfishGreen extends MovableObject {
    width = 72;
    height = 60;
    speed = 0.5;
    offsetX = 5;
    offsetY = 5;
    moving = 50;
    bubbleRange = 150;
    standardBubbleRange = 150;
    aggresiveBubbleRange = 200;
    otherDirection = false;
    getAggressive = false;
    getTransitionTime = 0;
    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];
    IMAGES_REVERSE_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png'
    ];
    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ];
    IMAGES_DEATH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.3.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_REVERSE_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEATH);
        this.x = x + Math.random() * 200;
        this.y = Math.random() * 400;
        this.speed = this.speed + Math.random() * 0.3;
        this.moveLeft();
        this.animate();
    }

    /**
     * animates the green pufferfish
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
            if (this.getAggressive && this.getTransitionTime < 4) {
                this.getTransitionTime++;
                this.playAnimation(this.IMAGES_TRANSITION);
            } else if (this.getAggressive && this.getTransitionTime >= 4) {
                this.playAnimation(this.IMAGES_BUBBLESWIM);
            } else if (!this.getAggressive && this.getTransitionTime > 0) {
                this.playAnimation(this.IMAGES_REVERSE_TRANSITION);
                this.getTransitionTime--;
            } else if (!this.getAggressive && this.getTransitionTime === 0) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 400);
    }

}