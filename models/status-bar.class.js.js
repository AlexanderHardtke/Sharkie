class StatusBar extends DrawableObject {
    LIFE = [
        'img/4. Marcadores/orange/0.png',
        'img/4. Marcadores/orange/1.png',
        'img/4. Marcadores/orange/2.png',
        'img/4. Marcadores/orange/3.png',
        'img/4. Marcadores/orange/4.png',
        'img/4. Marcadores/orange/5.png'
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.LIFE);
        this.x = 10;
        this.y = 2;
        this.width = 595 / 3;
        this.height = 158 / 3;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        return Math.floor(this.percentage / 20);
    }

}