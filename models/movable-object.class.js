class MovableObject extends DrawableObject {
    speed = 0.5;
    otherDirection = false;
    upDirection = false;
    downDirection = false;
    gravity = 1.5;
    offsetX = 30;
    life = 100;
    lastHit = 0;
    lastElectro = 0;


    applyGravity() {
        if (this.isAboveGround()) {
            this.y += this.gravity;
        }
    }

    isAboveGround() {
        return this.y < 320
    }

    moveLeft() {
        this.x -= this.speed;
    };

    moveRight() {
        this.x += this.speed;
    };

    moveUp() {
        this.y -= this.speed;
        this.upDirection = true;
    };

    moveDown() {
        this.y += this.speed;
        this.downDirection = true;
    };

    canMoveRight() {
        return this.x < this.world.level.level_end_x;
    }

    canMoveLeft() {
        return this.x > -450
    }

    canMoveUp() {
        return this.y > -50
    }

    canMoveDown() {
        return this.y < 310
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    isColliding(mo) {
        return (this.x + this.width / 2.2 + this.width / 3) >= mo.x &&
            (this.x + this.offsetX) <= (mo.x + mo.width) &&
            (this.y + this.height / 4 + this.height / 2) >= mo.y &&
            (this.y + this.height / 2) <= (mo.y + mo.height);
        // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    hit() {
        this.life -= 5;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in MS
        return timePassed < 500;
    }

    isDead() {
        return this.life == 0;
    }
}