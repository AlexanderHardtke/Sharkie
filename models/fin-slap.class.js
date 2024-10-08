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


    constructor() {
        super().loadImage(this.IMAGES_EMPTY);
        this.slap();
    }


    slap() {
        setInterval(() => {
            if (world.character.otherDirection) {
                this.x = world.character.x - 4;
                this.y = world.character.y + 88;
            } if (!world.character.otherDirection) {
                this.x = world.character.x + 108;
                this.y = world.character.y + 88;
            }
        }, 1000 / 60);
    }
}