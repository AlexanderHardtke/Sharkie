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

    /**
     * sets the percentage of the life status bar
     * 
     * @param {Array} percentage the % of the life bar that is shown
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * calculates the current life in 20% steps
     * 
     * @returns 0 - 5 for every 20% life
     */
    resolveImageIndex() {
        if (this.LIFE > 1000) {
            return;
        }
        return Math.floor(this.percentage / 20);
    }

}