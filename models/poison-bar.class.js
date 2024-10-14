/**
 * shows the status bar with the amount of Poison you have available
 */
class PoisonBar extends DrawableObject {
    POISON = ['img/4. Marcadores/green/100_ copia 5.png'];
    count = 0;
    countX = 248;
    countY = 50;


    constructor() {
        super();
        this.loadImage(this.POISON[0]);
        this.x = 205;
        this.y = 0;
        this.width = 55;
        this.height = 55;
    }

}