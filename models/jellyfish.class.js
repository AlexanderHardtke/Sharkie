class Jellyfish extends MovableObject {
    width = 70;
    height = 100;
    speed = 0.1;
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
        'img/2.Enemy/2 Jelly fish\Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish\Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish\Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish\Dead/Lila/L4.png'
    ];
    IMAGES_DEAD_DANGEROUS = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 400;
        this.speed = 0.09 + Math.random() * 0.1;
        this.animate();
    }

    /**
     * animates the jellyfish
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 400)
    }

}