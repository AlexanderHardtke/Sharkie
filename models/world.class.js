class World {
    character = new Character();
    bossSpawned = false;
    level;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    finSlapObject = [];
    canAttack = true;
    audioManager;
    paused = false;

    constructor(canvas, keyboard, level, audioManager) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.audioManager = audioManager;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCreateAttacks();
        this.audioManager.playAudio('audio/background_music.mp3');
    }

    /**
     * sets the character in the world
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * runs all the intervals for the current world
     */
    run() {
        setInterval(() => {
            this.winTurtorial();
            this.checkNearby();
            this.checkCollisions();
            this.checkCollisionsCollectable();
            this.checkCollisionsThrowableObjects();
            this.checkCollisionsFinSlap();
            this.checkCharacterPosition();
            this.checkSpawnEndboss(this.level);
        }, 200);
    }

    /**
    * checks if enemy is nearby and makes the enemy aggressive if true
    */
    checkNearby() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferfishRed || enemy instanceof PufferfishGreen) {
                if (this.character.characterIsNear(enemy)) {
                    enemy.getAggressive = true;
                    enemy.bubbleRange = enemy.aggresiveBubbleRange;
                } else if (!this.character.characterIsNear(enemy)) {
                    enemy.getAggressive = false;
                    enemy.bubbleRange = enemy.standardBubbleRange;
                }
            }
        });
    }

    /**
     * checks Collision with enemys and objects with the character
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy);
                this.statusBar.setPercentage(this.character.life);
                if (this.character.isDead()) {
                    this.audioManager.stopAudio('audio/background_music.mp3')
                    setTimeout(() => gameOverScreen(false, this.level.number), 3500);
                }
            }
        });
    }

    /**
     * checks if the character has collided with a collectable item
     */
    checkCollisionsCollectable() {
        this.level.collectables.forEach((item) => {
            if (this.character.isColliding(item)) this.character.gainItem(item);
        })
    }

    /**
     * checks Collsision ftom the throwable Objets with enemys
     */
    checkCollisionsThrowableObjects() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((throwableObject) => this.checkThrowsWithEnemys(enemy, throwableObject));
        });
    }

    /**
     * checks collision with the finslap attack
     */
    checkCollisionsFinSlap() {
        this.level.enemies.forEach((enemy) => {
            this.finSlapObject.forEach((attack) => {
                if (attack.isColliding(enemy) && (enemy instanceof PufferfishGreen || enemy instanceof PufferfishRed)) {
                    this.collisionFinSlapPuffer(enemy);
                } if (attack.isColliding(enemy) && enemy instanceof Endboss) this.throwHitEndboss(enemy);
            });
        });
    }

    /**
     * checks the character position in relation to the boss
     */
    checkCharacterPosition() {
        if (this.bossSpawned) {
            this.level.enemies.forEach((boss) => {
                if (boss instanceof Endboss) this.character.moveToCharacter(boss);
            });
        }
    }

    /**
     * checks if the character has reached the point so the Endboss is spawned
     * 
     * @param {Object} level the current Level the character is in
     */
    checkSpawnEndboss(level) {
        if (this.character.x > level.spawnEndboss && !this.bossSpawned) {
            this.bossSpawned = true;
            let boss = new Endboss(level.spawnEndboss);
            this.level.enemies.push(boss);
        }
    }

    /**
     * runs the intervals for the attacks from the character
     */
    checkCreateAttacks() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkFinSlap();
        }, 1000 / 30);
    }

    /**
     * checks if the character can attack and if the Button for creating a new Bubble is pressed
     */
    checkThrowObjects() {
        if ((this.keyboard.E && this.canAttack && this.poisonBar.count > 0) ||
            (this.keyboard.Q && this.canAttack && this.coinBar.count > 0)) {
            this.canAttack = false;
            let poison = this.keyboard.E;
            setTimeout(() => {
                this.createNewBubble(poison);
                this.canAttack = true;
            }, 1150);
        }
    }

    /**
     * checks if the character can attack and if the attack button is pressed
     */
    checkFinSlap() {
        if (this.keyboard.SPACE && this.canAttack) {
            this.canAttack = false;
            setTimeout(() => this.createFinSlap(), 600);
            setTimeout(() => {
                this.finSlapObject = [];
                this.canAttack = true;
            }, 1200);
        }
    }

    /**
     * creates an area before the character where the character can deal damage to the enemies
     */
    createFinSlap() {
        let slap = new FinSlap(this.character.x + 108, this.character.y + 88, this.character.otherDirection);
        this.finSlapObject.push(slap);
    }

    /**
     * creates a new Throwable Object
     * 
     * @param {boolean} poison true if the bubble is poisonous
     * @param {boolean} color true if the bubble is green pufferfish
     */
    createNewBubble(poison, color) {
        if (poison) this.poisonBar.count--;
        if (!poison && color === undefined) this.coinBar.count--;
        let bubble = new ThrowableObject(this.character.x + 108, this.character.y + 90, this.character.otherDirection, poison, color);
        this.throwableObjects.push(bubble);
    }

    /**
     * removes the bubble from the game
     * 
     * @param {Object} obj the throwable Object
     */
    removeBubble(obj) {
        let index = this.throwableObjects.findIndex(bubble => bubble === obj);
        if (index !== -1) {
            this.throwableObjects.splice(index, 1);
            this.audioManager.playAudio('audio/bubble_pop.mp3')
        }
    }

    /**
    * removes the enemy from the game
    * 
    * @param {Object} enemy the enemy that is removed
    */
    removeEnemy(enemy) {
        let index = this.level.enemies.findIndex(fish => fish === enemy);
        if (index !== -1) this.level.enemies.splice(index, 1);
    }

    /**
     * checks if the Collision has happened with the specific enemy
     * 
     * @param {Object} enemy the enemy
     * @param {Object} throwableObject the thrown Object 
     */
    checkThrowsWithEnemys(enemy, throwableObject) {
        if (throwableObject.isColliding(enemy) && enemy instanceof Jellyfish) {
            this.throwHitJellyfish(enemy, throwableObject);
        } if (throwableObject.isColliding(enemy) && enemy instanceof Endboss) {
            this.throwHitEndboss(enemy, throwableObject);
        }
    }

    /**
     * removes enemy Jellyfish and throwable item and creates a new collectable item
     */
    throwHitJellyfish(enemy, throwableObject) {
        this.createnewJellyBubble(enemy);
        this.removeEnemy(enemy);
        this.removeBubble(throwableObject);
    }

    /**
     * removes bubble and hits the Endboss, if Endboss is dead starts game over screen
     */
    throwHitEndboss(enemy, throwableObject) {
        enemy.hit(throwableObject);
        this.removeBubble(throwableObject);
        if (enemy.isDead()) {
            this.audioManager.stopAudio('audio/background_music.mp3')
            setTimeout(() => gameOverScreen(true, this.level.number), 1200);
        }
    }

    /**
     * finslap collision with Pufferfish removes Pufferfish and creates ne throwable Object
     */
    collisionFinSlapPuffer(enemy) {
        this.removeEnemy(enemy);
        this.enemyHitSound();
        let color = enemy instanceof PufferfishGreen;
        this.createNewBubble(false, color);
    }

    /**
     * plays 1 of 3 randomly choosen hit sounds
     */
    enemyHitSound() {
        let sounds = ['audio/hit1.mp3', 'audio/hit2.mp3', 'audio/hit3.mp3'];
        let randomIndex = Math.floor(Math.random() * sounds.length);
        this.audioManager.playAudio(sounds[randomIndex]);
    }

    /**
     * creates a new collectable bubble with a jellyfish inside
     * 
     * @param {Object} jellyfish the collectable item
     */
    createnewJellyBubble(jellyfish) {
        let bubble = new JellyfishCatched(jellyfish.x, jellyfish.y, jellyfish.dangerous);
        this.level.collectables.push(bubble);
    }

    /**
     * checks if the win condition for the turtorial is reached
     */
    winTurtorial() {
        if (this.level.number == 0 && this.character.x > 2800) gameOverScreen(true, 0);
    }

    /**
     * draws the Object repeatedly on the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawMoveableObjects();
        this.drawFixedObjects();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * draws all movable Objects
     */
    drawMoveableObjects() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectables)
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.finSlapObject);
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * draws all fixed Objects
     */
    drawFixedObjects() {
        this.addToMap(this.statusBar);
        this.addToMap(this.poisonBar);
        this.drawCount(this.poisonBar);
        this.addToMap(this.coinBar);
        this.drawCount(this.coinBar);
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

    /**
     * seperates the objects and adds it to the map
     * 
     * @param {Array} objects An array of objects
     */
    addObjectsToMap(objects) {
        objects.forEach(object => this.addToMap(object));
    }

    /**
     * adds the Object to the map
     * 
     * @param {Object} mo the object that is added
     */
    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        if (mo.upDirection || mo.downDirection) this.rotateImage(mo);
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        this.ctx.restore();
        if (mo.otherDirection) this.flipImageBack(mo);
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
     * rotates the Object depending on character and enemy
     * 
     * @param {Object} mo movable Object in the game 
     */
    rotateImage(mo) {
        if (mo instanceof Character) this.handleRotation(mo, mo.upDirection, mo.downDirection, false);
        else this.handleRotation(mo, mo.upDirection, mo.downDirection, true);
    }

    /**
    * Handles the rotation of an object either upwards or downwards, with optional mirroring.
    * 
    * @param {Object} mo Movable Object in the game.
    * @param {boolean} upDirection True if moving up.
    * @param {boolean} downDirection True if moving down.
    * @param {boolean} isMirrored True if the object is mirrored (for enemies).
    */
    handleRotation(mo, upDirection, downDirection, isMirrored) {
        const rotationFactor = isMirrored ? 1 : -1;
        if (upDirection && !downDirection) this.rotateImageWithAngle(mo, rotationFactor * Math.PI / 8);
        else if (!upDirection && downDirection) this.rotateImageWithAngle(mo, rotationFactor * -Math.PI / 8);
        else this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

    /**
    * Applies the rotation by a given angle to the object.
    * 
    * @param {Object} mo Movable Object in the game.
    * @param {number} angle Rotation angle in radians.
    */
    rotateImageWithAngle(mo, angle) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width / 2, mo.y + mo.height / 2);
        this.ctx.rotate(angle);
        this.ctx.translate(-(mo.x + mo.width / 2), -(mo.y + mo.height / 2));
    }
}