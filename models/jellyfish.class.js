class Jellyfish extends MovableObject {
    width = 70;
    height = 100;
    speed = 2.5;
    offsetX = 10;
    offsetY = 15;
    dangerous = false;
    moveUp = true;
    IMAGES_IDLE = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];
    IMAGES_DEAD_NORMAL = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];
    IMAGES_DEAD_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];

    constructor(x) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.loadImages(this.IMAGES_DANGEROUS)
        this.loadImages(this.IMAGES_DEAD_DANGEROUS)
        this.loadImages(this.IMAGES_DEAD_NORMAL)
        this.x = x;
        this.y = Math.random() * 400;
        this.speed = this.speed + Math.random() * 0.2;
        this.animate();
    }

    /**
     * animates the jellyfish
     */
    animate() {
        this.setStoppableInterval(() => this.moveJellyfish(), 1000 / 60);
        this.setStoppableInterval(() => this.animateJellyfish(), 330);
    }

    /**
     * moves the Jellyfish enemy
     */
    moveJellyfish() {
        if (this.canMoveUp(55) && this.moveUp) this.moveJellyUp();
        else this.moveUp = false;
        if (this.canMoveDown(-50) && !this.moveUp) this.moveJellyDown();
        else this.moveUp = true;
    }

    /**
     * animates the Jellyfish enemy
     */
    animateJellyfish() {
        if (this.dangerousTime < 11) this.jellyfishIdle();
        else if (this.dangerousTime < 23) this.jellyfishDangerous();
        if (this.dangerousTime == 23) this.jellyfishResetDanger();
    }

    /**
     * plays the idle animation and increases the dangerous counter of the jellyfish
     */
    jellyfishIdle() {
        this.playAnimation(this.IMAGES_IDLE);
        this.dangerousTime++
    }

    /**
     * plays the dangerous animation and increases the dangerous counter of the jellyfish
     */
    jellyfishDangerous() {
        this.playAnimation(this.IMAGES_DANGEROUS);
        this.dangerousTime++
        this.dangerous = true;
    }

    /**
     * plays the idle animation and resets the dangerous counter of the jellyfish
     */
    jellyfishResetDanger() {
        this.playAnimation(this.IMAGES_IDLE);
        this.dangerousTime = 0;
        this.dangerous = false;
    }

    /**
     * moves the Jellyfish up
     */
    moveJellyUp() {
        this.y -= this.speed;
    };

    /**
     * moves the Jellyfish down
     */
    moveJellyDown() {
        this.y += this.speed;
    };

}