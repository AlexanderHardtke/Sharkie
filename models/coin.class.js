class Coin extends MovableObject {
    IMAGES_IDLE = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];
    width = 99 * 0.45;
    height = 93 * 0.45;
    

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 400;
        this.speed = 0,
        this.moveLeft();
        this.animate();
    }

    /**
     * animates the coin
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 400)
    }

}