/**
 * loads a collectable Coin for the game
 */
class Coin extends MovableObject {
    IMAGES_IDLE = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];
    width = 99 * 0.45;
    height = 93 * 0.45
    offsetX = 5;
    offsetY = 5;
    collectedAudio = 'audio/coin.mp3';
    

    constructor(x, y) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * animates the coin
     */
    animate() {
        this.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 400)
    }

}