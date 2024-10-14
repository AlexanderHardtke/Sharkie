/**
 * defines the catched jellyfish inside a bubble to be collected from the player
 */
class JellyfishCatched extends MovableObject {
    JELLYFISH_CATCHED = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];
    JELLYFISH_CATCHED_ELECTRO = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];
    width = 210 * 0.3;
    height = 300 * 0.3;
    gravity = -0.05;
    x;
    y;
    collectedAudio = 'audio/poison_flask.mp3';

    constructor(x, y, dangerous) {
        if (dangerous) {
            super().loadImage('img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png');
            this.loadImages(this.JELLYFISH_CATCHED_ELECTRO);
        } else {
            super().loadImage('img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png');
            this.loadImages(this.JELLYFISH_CATCHED);
        }
        this.x = x;
        this.y = y;
        this.animate(dangerous);
    }

    /**
     * animates the catched jellyfish bubble
     * 
     * @param {boolean} dangerous checks the status of the jellyfish at the moment of capture
     */
    animate(dangerous) {
        this.setStoppableInterval(() => {
            this.applyGravity(this.gravity);
        }, 1000 / 60);

        this.setStoppableInterval(() => {
            if (dangerous) {
                this.playAnimation(this.JELLYFISH_CATCHED_ELECTRO);
            } else {
                this.playAnimation(this.JELLYFISH_CATCHED);
            }
        }, 200)
    }


}