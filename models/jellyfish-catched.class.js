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
    height = 33;
    width = 33;
    gravity = -0.05;
    x;
    y;

    constructor(x, y, electro) {
        super().loadImages(this.JELLYFISH_CATCHED_ELECTRO);
        this.loadImages(this.JELLYFISH_CATCHED);
        this.x = x;
        this.y = y;
        this.animate(electro);
    }

    animate(electro) {
        setInterval(() => {
            this.applyGravity(this.gravity);
        }, 1000 / 60);

        setInterval(() => {
            if (electro) {
                this.playAnimation(this.JELLYFISH_CATCHED_ELECTRO);
            } else {
                this.playAnimation(this.JELLYFISH_CATCHED);
            }
        }, 350)
    }


}