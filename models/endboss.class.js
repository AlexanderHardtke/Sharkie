class Endboss extends MovableObject {
    width = 1041 * 0.3;
    height = 1216 * 0.3;
    speed = 1.5;
    offsetX = 25;
    offsetY = 120;
    attack = -4;
    intro = 0;
    life = 25;
    IMAGES_INTRODUCTION = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
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
    SOUND_INTRODUCTION = 'audio/enboss_incoming.mp3';
    SOUND_ATTACK = 'audio/Attack_Orca.mp3';
    SOUND_WIN = 'audio/win.mp3';

    constructor(spawn) {
        super().loadImage(this.IMAGES_INTRODUCTION[0]);
        this.loadImages(this.IMAGES_INTRODUCTION);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.y = 0;
        this.x = spawn + 500;
        setTimeout(() => this.animate(), 200);
    }

    /**
     * animates the Endboss and moves it
     */
    animate() {
        this.setStoppableInterval(() => this.endbossMoving(), 1000 / 60)
        this.setStoppableInterval(() => this.endbossAnimate(), 200);
    }

    /**
     * moves the endboss enemy
     */
    endbossMoving() {
        if (this.intro > 10) {
            let speed = this.speed;
            if (this.attack >= 48) speed = this.speed * 0.1;
            if (this.attack < 6) speed = this.speed * 5;
            if (this.charIsLeft) this.moveLeft(speed);
            if (this.charIsRight) this.moveRight(speed);
            if (this.charIsUp) this.moveUp(this.speed);
            if (this.charIsDown) this.moveDown(this.speed);
        }
    }

    /**
     * animates the endboss enemy
     */
    endbossAnimate() {
        if (this.intro < 10) this.endbossIntroduction();
        else if (this.isDead()) this.endbossDead();
        else if (this.attack >= 50) this.endbossattack();
        else if (this.isHurt()) this.playAnimation(this.IMAGES_HURT);
        else if (this.intro > 10 && this.attack < 40) this.playAnimation(this.IMAGES_IDLE);
        this.endbossAnimateCounter();
    }

    /**
     * moves the endboss enemy left
     */
    moveLeft(speed) {
        super.moveLeft(speed);
        this.otherDirection = false;
    }

    /**
     * moves the endboss enemy right
     */
    moveRight(speed) {
        super.moveRight(speed);
        this.otherDirection = true;
    }

    /**
     * plays the introduction animation with audio for the endboss
     */
    endbossIntroduction() {
        this.playAnimation(this.IMAGES_INTRODUCTION);
        world.audioManager.playAudio(this.SOUND_INTRODUCTION);
    }

    /**
     * plays the dead animation with audio for the endboss
     */
    endbossDead() {
        world.audioManager.playAudio(this.SOUND_WIN);
        this.playAnimationOnce(this.IMAGES_DEAD, 200);
        this.stopAllInterval();
    }

    /**
     * plays the attack animation with audio for the endboss
     */
    endbossattack() {
        this.playAnimationOnce(this.IMAGES_ATTACK, 200);
        world.audioManager.playAudio(this.SOUND_ATTACK);
        this.attack = 0;
    }

    /**
     * increases the counter of the endboss timers
     */
    endbossAnimateCounter() {
        this.intro++;
        this.attack++;
    }
}