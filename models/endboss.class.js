class Endboss extends MovableObject {
    width = 1041 * 0.3;
    height = 1216 * 0.3;
    speed = 0.2;
    hadFirstContact = false;
    IMAGES_INTRODUCTION = [
        'img/2.Enemy/3 Final Enemy/1.introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.introduce/10.png'
    ];
    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/1.png',
        'img/2.Enemy/3 Final Enemy/Dead/2.png',
        'img/2.Enemy/3 Final Enemy/Dead/3.png',
        'img/2.Enemy/3 Final Enemy/Dead/4.png',
        'img/2.Enemy/3 Final Enemy/Dead/5.png',
        'img/2.Enemy/3 Final Enemy/Dead/6.png'
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.y = 0;
        this.x = 2200;
        this.speed = 0.2 + Math.random() * 0.1;
        this.moveLeft();
        this.animate();
    }

    /**
     * animates the endboss
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 250)
    }

    // animate() {
    //     setInterval(() => {
    //         let i = 50;
    //         setInterval(() => {
    //             if (i < 10) {
    //                 this.playAnimation(this.IMAGES_INTRODUCTION);
    //             } else {
    //                 this.playAnimation(this.IMAGES_IDLE);
    //             }
    //             i++
    //             if(world.character.x > 1700 && !this.hadFirstContact) {
    //                 i = 0;
    //                 this.hadFirstContact = true;
    //             }
    //         })
    //     }, 250)
    // }

}