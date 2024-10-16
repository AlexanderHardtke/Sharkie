class PufferfishRed extends MovableObject {
    width = 72;
    height = 60;
    speed = 1.5;
    offsetX = 5;
    offsetY = 5;
    moving = 50;
    bubbleRange = 250;
    standardBubbleRange = 250;
    aggresiveBubbleRange = 350;
    otherDirection = false;
    getAggressive = false;
    getTransitionTime = 0;
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
    IMAGES_REVERSE_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png'
    ];
    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_REVERSE_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.x = x;
        this.y = Math.random() * 400;
        this.speed = this.speed + Math.random() * 1.2;
        this.moveLeft();
        this.animate();
    }

    /**
     * animates the red pufferfish
     */
    animate() {
        this.setStoppableInterval(() => this.pufferfishMoving(), 1000 / 60);
        this.setStoppableInterval(() => this.pufferfishAnimate(), 280);
    }

    /**
     * moves the Pufferfish enemy
     */
    pufferfishMoving() {
        if (this.moving < 400) this.moveLeft()
        else if (this.moving < 800) this.moveRight();
        if (this.moving >= 800) this.moving = 0;
    }

    /**
     * moves the Pufferfish enemy left and increases the counter
     */
    moveLeft() {
        super.moveLeft();
        this.moving++;
        this.otherDirection = false;
    }

    /**
     * moves the Pufferfish enemy right and increases the counter
     */
    moveRight() {
        super.moveRight();
        this.moving++;
        this.otherDirection = true;
    }

    /**
     * animates the Pufferfish enemy
     */
    pufferfishAnimate() {
        if (this.getAggressive && this.getTransitionTime < 4) {
            this.getTransitionTime++;
            this.playAnimation(this.IMAGES_TRANSITION);
        } else if (this.getAggressive && this.getTransitionTime >= 4) this.playAnimation(this.IMAGES_BUBBLESWIM);
        else if (!this.getAggressive && this.getTransitionTime > 0) {
            this.playAnimation(this.IMAGES_REVERSE_TRANSITION);
            this.getTransitionTime--;
        } else if (!this.getAggressive && this.getTransitionTime === 0) this.playAnimation(this.IMAGES_IDLE);
    }
}