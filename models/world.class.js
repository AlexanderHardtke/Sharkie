class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    backgroundMusic = new Audio('audio/background_music.mp3')

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // this.backgroundMusic.play();
    }

    /**
     * sets the character in the world
     */
    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.E || this.keyboard.Q) {
            let poison = this.keyboard.E;
            let bubble = new ThrowableObject(this.character.x + 95, this.character.y + 77, this.character.otherDirection, poison);
            this.throwableObjects.push(bubble);
        }
    }

    /**
     * checks Collision with enemys and objects with the character
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('Collision with Character remaining Life', this.character.life);
                this.character.hit();
                this.statusBar.setPercentage(this.character.life);
                // this.character.isDead();
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        // ---------- Space for fixed Objects ---------- //
        this.addToMap(this.statusBar);
        this.addToMap(this.poisonBar);
        this.drawCount(this.poisonBar);
        this.addToMap(this.coinBar);
        this.drawCount(this.coinBar);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * draws the counter of the amount of poison bottles and coins on the canvas
     * 
     * @param {Object} obj The amount of coins or poison bottles collected
     */
    drawCount(obj) {
        this.ctx.font = "48px luckiestGuy";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(obj.count, obj.countX, obj.countY);
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o)
        })
    }

    /**
     * flips the image of the object
     * 
     * @param {Object} mo movable Object in the game 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * flips the object back
     * 
     * @param {Object} mo movable Object in the game 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
     * rotates the Object upwards or downwards
     * 
     * @param {Object} mo movable Object in the game 
     */
    rotateImage(mo) {
        if (mo.upDirection && !mo.downDirection) {
            this.rotateImageUp(mo);
        }
        else if (!mo.upDirection && mo.downDirection) {
            this.rotateImageDown(mo);
        }
        else {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }

    /**
     * rotates the Object upwards
     * 
     * @param {Object} mo movable Object in the game 
     */
    rotateImageUp(mo) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width / 2, mo.y + mo.height / 2);
        this.ctx.rotate(-Math.PI / 6);
        this.ctx.translate(-(mo.x + mo.width / 2), -(mo.y + mo.height / 2));
    }

    /**
     * rotates the Object downwards
     * 
     * @param {Object} mo movable Object in the game 
     */
    rotateImageDown(mo) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width / 2, mo.y + mo.height / 2);
        this.ctx.rotate(Math.PI / 6);
        this.ctx.translate(-(mo.x + mo.width / 2), -(mo.y + mo.height / 2));
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        if (mo.upDirection || mo.downDirection) {
            this.rotateImage(mo);
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        this.drawBorder(mo);
        this.ctx.restore();
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    /**
     * draws a border around the movable Object to make the collision visual 
     * 
     * @param {Object} mo movable Object in the game
     */
    drawBorder(mo) {
        if (mo instanceof PufferfishRed || mo instanceof PufferfishGreen || mo instanceof Jellyfish || mo instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'hotpink';
            this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
            this.ctx.stroke();
        }
        else if (mo instanceof Character) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'hotpink';
            this.ctx.rect(mo.x + mo.width / 3, mo.y + mo.height / 2, mo.width / 2.2, mo.height / 4);
            this.ctx.stroke();
        }
    }
}