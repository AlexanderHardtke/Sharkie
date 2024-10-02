class MovableObject extends DrawableObject {
    speed = 0.5;
    otherDirection = false;
    upDirection = false;
    downDirection = false;
    gravity = 1.5;
    offsetX = 0;
    offsetY = 0;
    life = 100;
    lastHit = 0;
    lastElectro = 0;


    /**
     * applys gravity to the game that pulls the object down
     */
    applyGravity(x) {
        if (this.isAboveGround()) {
            this.y += this.gravity + x;
        }
    }

    /**
     * checks if the object is above the ground
     * 
     * @returns if the value is greater than the ground
     */
    isAboveGround() {
        return this.y < 320
    }

    /**
     * moves the object left
     */
    moveLeft() {
        this.x -= this.speed;
    };

    /**
     * moves the object right
     */
    moveRight() {
        this.x += this.speed;
    };

    /**
     * moves the object up
     */
    moveUp() {
        this.y -= this.speed;
        this.upDirection = true;
    };

    /**
     * moves the object down
     */
    moveDown() {
        this.y += this.speed;
        this.downDirection = true;
    };

    /**
     * checks if the object can move right
     * 
     * @returns if the end of the level is reached
     */
    canMoveRight() {
        return this.x < this.world.level.level_end_x;
    }

    /**
     * checks if the object can move left
     * 
     * @returns if the start of the level is reached
     */
    canMoveLeft() {
        return this.x > -450
    }

    /**
     * checks if the object can move up
     * 
     * @returns if the top of the level is reached
     */
    canMoveUp() {
        return this.y > -50
    }

    /**
     * checks if the object can move down
     * 
     * @returns if the bottom of the level is reached
     */
    canMoveDown() {
        return this.y < 310
    }

    /**
     * plays the animation of the object
     * 
     * @param {Array} images all images with the current animation from the object 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    playAnimationOnce(images) {
        if (!this.animationPlaying) {
            this.animationPlaying = true;
            this.currentImage = 0;
            let intervalId = setInterval(() => {
                let i = this.currentImage;
                if (i < images.length) {
                    let path = images[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                } else {
                    clearInterval(intervalId);
                    this.animationPlaying = false;
                }
            }, 220);
        }
    }
    
    /**
     * checks if the character is colliding with an object
     * 
     * @param {object} mo the object that collides with the character 
     * @returns true or false if the character has collided with the object
     */
    isColliding(mo) {
        return (this.x + this.width / 2.2 + this.width / 3) >= mo.x &&
            (this.x + this.offsetX) <= (mo.x + mo.width + mo.offsetX) &&
            (this.y + this.height / 4 + this.height / 2) >= mo.y &&
            (this.y + this.height / 2) <= (mo.y + mo.height);
    }

    /**
     * removes life points from the character until 0 is reached and saves the time from the last hit
     */
    hit() {
        this.life -= 5;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    gainItem(item) {
        if (item instanceof Coin) {
            this.world.coinBar.count++;
        } if (item instanceof Poison) {
            this.world.poisonBar.count++;
        }
        this.removeItem(item);
    }

    removeItem(item) {
        let index = this.world.level.collectables.findIndex(collectable => collectable === item);
        if (index !== -1) {
            let collectable = this.world.level.collectables[index].collectedAudio;
            collectable.play();
            this.world.level.collectables.splice(index, 1);
        }
    }

    /**
     * checks the difference from the current time to the time the character was last hit
     * 
     * @returns true until 500 ms have passed
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in MS
        return timePassed < 500;
    }

    /**
     * checks if the character is dead
     * 
     * @returns true if the character has 0 life points
     */
    isDead() {
        return this.life == 0;
    }
}