class CoinBar extends DrawableObject {
    COINS = ['img/4. Marcadores/green/100_ copia 6.png'];
    count = 5;
    countX = 352;
    countY = 50;


    constructor() {
        super();
        this.loadImage(this.COINS[0]);
        this.x = 300;
        this.y = 5;
        this.width = 55;
        this.height = 55;
    }

}