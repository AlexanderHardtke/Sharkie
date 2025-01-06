class FinSlap extends MovableObject {
    IMAGES_EMPTY = [
        'img/1.Sharkie/4.Attack/Fin slap/Empty.png'
    ];
    height = 44;
    width = 36;
    x;
    y;
    gravity = 0;
    speed = 0;
    offsetFinY = 88;
    offsetFinXOth = -22;
    offsetFinX = 106;

    constructor() {
        super().loadImage(this.IMAGES_EMPTY);
        this.slap();
    }

    /**
     * creates the finslap Object to hit enemys
     */
    slap() {
        this.setStoppableInterval(() => {
            if (world.character.otherDirection) {
                this.x = world.character.x + this.offsetFinXOth;
                this.y = world.character.y + this.offsetFinY;
            } if (!world.character.otherDirection) {
                this.x = world.character.x + this.offsetFinX;
                this.y = world.character.y + this.offsetFinY;
            }
        }, 1000 / 60);
    }
}