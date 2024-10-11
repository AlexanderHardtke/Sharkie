class Poison extends MovableObject {
    IMAGES_IDLE = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ];
    width = 178 * 0.25;
    height = 243 * 0.25;
    offsetX = 5;
    offsetY = 10;
    collectedAudio = 'audio/poison_flask.mp3';
    

    constructor(x, y) {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * animates the poison bottle
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 400)
    }

}