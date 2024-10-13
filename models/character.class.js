class Character extends MovableObject {
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/1.png',
        'img/1.Sharkie/2.Long_IDLE/2.png',
        'img/1.Sharkie/2.Long_IDLE/3.png',
        'img/1.Sharkie/2.Long_IDLE/4.png',
        'img/1.Sharkie/2.Long_IDLE/5.png',
        'img/1.Sharkie/2.Long_IDLE/6.png',
        'img/1.Sharkie/2.Long_IDLE/7.png',
        'img/1.Sharkie/2.Long_IDLE/8.png',
        'img/1.Sharkie/2.Long_IDLE/9.png',
        'img/1.Sharkie/2.Long_IDLE/10.png'
    ];
    IMAGES_SLEEP = [
        'img/1.Sharkie/7.Sleep/1.png',
        'img/1.Sharkie/7.Sleep/2.png',
        'img/1.Sharkie/7.Sleep/3.png',
        'img/1.Sharkie/7.Sleep/4.png'
    ];
    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    IMAGES_ATTACK_MELEE = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png'
    ];
    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];
    IMAGES_ATTACK_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];
    IMAGES_HURT_POISON = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_HURT_ELECTRIC = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];
    IMAGES_DEAD_ELECTRIC = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
    SOUND_SWIMMING = 'audio/sharkie_swim.mp3';
    SOUND_ATTACKING = 'audio/attack.mp3';
    SOUND_BUBBLE_ATTACK = 'audio/bubble_create.mp3'
    SOUND_ELECTROCUTED = 'audio/electrcuted.mp3';
    SOUND_HURT = 'audio/hurt.mp3'
    SOUND_DIE = 'audio/loose.mp3'
    SOUND_DIE_ELECTRIC = 'audio/die_electric.mp3'
    SOUND_SLEEP = 'audio/sleeping.mp3'
    speed = 4.0;
    world;
    idleTime = 0;
    offsetX = 35;
    offsetY = 54;
    lastHitElectro = false;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadCharacterImages();
        this.animate();
    }

    /**
     * loads all Character images
     */
    loadCharacterImages() {
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACK_MELEE);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_POISON_BUBBLE);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_HURT_ELECTRIC);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DEAD_ELECTRIC);
    }

    /**
     * shows the current character animation
     */
    animate() {
        this.setStoppableInterval(() => {
            let isMovingNow = false;
            if (!this.isDead()) {
                if (this.world.keyboard.RIGHT && this.canMoveRight()) {
                    this.moveRight();
                    this.otherDirection = false;
                    isMovingNow = true;
                } if (this.world.keyboard.LEFT && this.canMoveLeft()) {
                    this.moveLeft();
                    this.otherDirection = true;
                    isMovingNow = true;
                } if (this.world.keyboard.UP && this.canMoveUp(0)) {
                    this.moveUp();
                    isMovingNow = true;
                } else {
                    this.upDirection = false;
                } if (this.world.keyboard.DOWN && this.canMoveDown(0)) {
                    this.moveDown();
                    isMovingNow = true;
                } else {
                    this.downDirection = false;
                } if (isMovingNow && !this.isMoving) {
                    this.world.audioManager.playAudio(this.SOUND_SWIMMING);
                    this.isMoving = true;
                    this.idleTime = 0;
                } else if (!isMovingNow && this.isMoving) {
                    this.world.audioManager.pauseAudio(this.SOUND_SWIMMING);
                    this.isMoving = false;
                }
                this.world.camera_x = -this.x + 150;
            }
        }, 1000 / 60);


        this.setStoppableInterval(() => {
            if (!this.isDead()) {

                if (this.isElectrocuted()) {
                    this.lastHitElectro = true;
                    this.world.audioManager.playAudio(this.SOUND_ELECTROCUTED);
                    this.playAnimation(this.IMAGES_HURT_ELECTRIC);


                } else if (this.isHurt()) {
                    this.lastHitElectro = false;
                    this.playAnimation(this.IMAGES_HURT_POISON);
                    this.world.audioManager.playAudio(this.SOUND_HURT);


                } else if (this.isAttacking()) {
                    this.playAnimationOnce(this.IMAGES_ATTACK_MELEE, 220);
                    setTimeout(() => {
                        this.world.audioManager.playAudio(this.SOUND_ATTACKING, 1540);
                    }, 1000);


                } else if (this.isBubbleAttack()) {
                    this.playAnimationOnce(this.IMAGES_ATTACK_BUBBLE, 220);
                    setTimeout(() => {
                        this.world.audioManager.playAudio(this.SOUND_BUBBLE_ATTACK, 1760);
                    }, 600);


                } else if (this.isPoisonBubbleAttack() && this.world.poisonBar.count > 0) {
                    this.playAnimationOnce(this.IMAGES_ATTACK_POISON_BUBBLE, 220);
                    setTimeout(() => {
                        this.world.audioManager.playAudio(this.SOUND_BUBBLE_ATTACK, 1760);
                    }, 600);


                } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                    this.playAnimation(this.IMAGES_SWIMMING);


                } else if (this.idleTime <= 50) {
                    this.world.audioManager.stopAudio(this.SOUND_SLEEP);
                    this.playAnimation(this.IMAGES_IDLE);
                    this.applyGravity(0);
                    this.idleTime++;


                } else if (this.idleTime <= 60) {
                    this.playAnimation(this.IMAGES_LONG_IDLE);
                    this.applyGravity(1);
                    this.world.audioManager.playAudio(this.SOUND_SLEEP);
                    this.idleTime++;


                } else if (this.idleTime > 60) {
                    this.playAnimation(this.IMAGES_SLEEP);
                    this.applyGravity(2);
                }

            } else if (this.isDead()) {
                if (this.lastHitElectro) {
                    this.playAnimationOnce(this.IMAGES_DEAD_ELECTRIC, 220);
                    this.world.audioManager.playAudio(this.SOUND_DIE_ELECTRIC);
                } else {
                    this.playAnimationOnce(this.IMAGES_DEAD, 220);
                    this.world.audioManager.playAudio(this.SOUND_DIE);
                }
            }
        }, 220)
    };

    isAttacking() {
        return this.world.keyboard.SPACE;
    }

    isBubbleAttack() {
        return this.world.keyboard.Q
    }

    isPoisonBubbleAttack() {
        return this.world.keyboard.E
    }

}