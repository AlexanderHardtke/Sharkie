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
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
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
    attackTimeMelee = 0;
    attackTimeRanged = 0;
    attackTimeRangedPoison = 0;
    offsetX = 35;
    offsetY = 54;
    lastHitElectro = false;
    isMoving = false;

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
        this.setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        this.setStoppableInterval(() => this.playCharacter(), 150)
    };

    /**
     * moves the character on the canvas
     */
    moveCharacter() {
        if (!this.isDead()) {
            this.isMoving = false;
            if (this.world.keyboard.RIGHT && this.canMoveRight()) this.moveRight();
            if (this.world.keyboard.LEFT && this.canMoveLeft()) this.moveLeft();
            if (this.world.keyboard.UP && this.canMoveUp(0)) this.moveUp();
            else this.upDirection = false;
            if (this.world.keyboard.DOWN && this.canMoveDown(0)) this.moveDown();
            else this.downDirection = false;
            if (this.isMoving) this.characterIsMoving();
            else if (!this.isMoving) this.world.audioManager.pauseAudio(this.SOUND_SWIMMING);
            this.world.camera_x = -this.x + 150;
        }
    }

    /**
     * resets the idle Time and stops the swimming sound
     */
    characterIsMoving() {
        this.world.audioManager.playAudio(this.SOUND_SWIMMING);
        this.idleTime = 0;
    }

    /**
     * moves the character right
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.isMoving = true;
    }

    /**
     * moves the character left
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.isMoving = true;
    }

    /**
     * moves the character upwards
     */
    moveUp() {
        super.moveUp();
        this.isMoving = true;
    }

    /**
     * moves the character downwards
     */
    moveDown() {
        super.moveDown();
        this.isMoving = true;
    }

    /**
     * plays the animation of the character
     */
    playCharacter() {
        if (this.isDead()) {
            this.characterIsDead();
            return;
        } const { RIGHT, LEFT, UP, DOWN } = this.world.keyboard;
        if (this.isElectrocuted()) this.characterIsElectrocuted();
        else if (this.isHurt()) this.characterIsHurt();
        else if (this.isAttacking() || this.attackTimeMelee > 1) this.characterIsAttacking();
        else if (this.isBubbleAttack()) this.characterIsBubbleAttacking();
        else if (this.isPoisonBubbleAttack() && this.world.poisonBar.count > 0) this.characterIsPoisonBubbleAttacking();
        else if (RIGHT || LEFT || UP || DOWN) this.playAnimation(this.IMAGES_SWIMMING);
        else if (this.isIdle()) this.idle();
        else if (this.isFallingAsleep()) this.fallingAsleep();
        else if (this.isSleeping()) this.sleeping();
    }

    /**
     * plays the death animation of the character
     */
    characterIsDead() {
        if (this.lastHitElectro) {
            this.playAnimationOnce(this.IMAGES_DEAD_ELECTRIC, 220);
            this.world.audioManager.playAudio(this.SOUND_DIE_ELECTRIC);
        } else {
            this.playAnimationOnce(this.IMAGES_DEAD, 220);
            this.world.audioManager.playAudio(this.SOUND_DIE);
        }
    }

    /**
     * plays the hurt animation of the character
     */
    characterIsHurt() {
        this.lastHitElectro = false;
        this.playAnimation(this.IMAGES_HURT_POISON);
        this.world.audioManager.playAudio(this.SOUND_HURT);
    }

    /**
     * plays the attacking animation of the character
     */
    characterIsAttacking() {
        this.playAnimation(this.IMAGES_ATTACK_MELEE);
        this.attackTimeMelee++;
        setTimeout(() => this.world.audioManager.playAudio(this.SOUND_ATTACKING, 1200), 1000);
    }

    /**
     * plays the bubble attack animation of the character
     */
    characterIsBubbleAttacking() {
        this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
        this.attackTimeRanged++;
        setTimeout(() => this.world.audioManager.playAudio(this.SOUND_BUBBLE_ATTACK, 1500), 600);
    }

    /**
     * plays the posion bubble attack animation of the character
     */
    characterIsPoisonBubbleAttacking() {
        this.playAnimation(this.IMAGES_ATTACK_POISON_BUBBLE);
        this.attackTimeRangedPoison++;
        setTimeout(() => this.world.audioManager.playAudio(this.SOUND_BUBBLE_ATTACK, 1500), 600);
    }

    /**
     * returns the time the character is idle
     */
    isIdle() {
        return this.idleTime <= 50
    }

    /**
     * plays idle animation of the character
     */
    idle() {
        this.world.audioManager.stopAudio(this.SOUND_SLEEP);
        this.playAnimation(this.IMAGES_IDLE);
        this.applyGravity(0);
        this.idleTime++;
    }

    /**
     * returns true if the idle time of the character is betwen 50 and 60
     */
    isFallingAsleep() {
        return this.idleTime <= 60
    }

    /**
     * plays falling asleep animation of the character
     */
    fallingAsleep() {
        this.playAnimation(this.IMAGES_LONG_IDLE);
        this.applyGravity(1);
        this.world.audioManager.playAudio(this.SOUND_SLEEP);
        this.idleTime++;
    }

    /**
     * returns true if the idle time of the character is greater than 60
     */
    isSleeping() {
        return this.idleTime > 60
    }

    /**
     * plays sleeping animation of the character
     */
    sleeping() {
        this.playAnimation(this.IMAGES_SLEEP);
        this.applyGravity(2);
    }

    /**
     * checks if the Space Bar is pressed and activates the attack animation for the duraction of the attack
     *  
     * @returns true/false
     */
    isAttacking() {
        if (this.attackTimeMelee == 0) return this.world.keyboard.SPACE;
        else if (this.attackTimeMelee > 0 && this.attackTimeMelee < 8) return true;
        else {
            this.attackTimeMelee = 0;
            return false;
        }
    }

    /**
     * checks if Q is pressed
     * 
     * @returns true/false
     */
    isBubbleAttack() {
        if (this.attackTimeRanged == 0 && this.world.keyboard.Q) return true;
        else if (this.attackTimeRanged > 0 && this.attackTimeRanged < 8) return true;
        else {
            this.attackTimeRanged = 0;
            return false;
        }
    }

    /**
     * checks the difference from the current time to the time the character was last hit with an electric attack
     * 
     * @returns true until 400 ms have passed
     */
    isElectrocuted() {
        let timePassed = new Date().getTime() - this.lastElectrocuted; // Difference in MS
        return timePassed < 400;
    }

    characterIsElectrocuted() {
        this.lastHitElectro = true;
        this.world.audioManager.playAudio(this.SOUND_ELECTROCUTED);
        this.playAnimation(this.IMAGES_HURT_ELECTRIC);
    }

    /**
     * checks if E is pressed
     * 
     * @returns true/false
     */
    isPoisonBubbleAttack() {
        if (this.attackTimeRangedPoison == 0 && this.world.keyboard.E) return true;
        else if (this.attackTimeRangedPoison > 0 && this.attackTimeRangedPoison < 8) return true;
        else {
            this.attackTimeRangedPoison = 0;
            return false;
        }
    }
}