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

    checkCreateAttacks() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkFinSlap();
        }, 1000/60);
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
     * checks if the character can attack and if the Button for creating a new Bubble is pressed
     */
    checkThrowObjects() {
        if (this.keyboard.E && this.canAttack && this.poisonBar.count > 0 || this.keyboard.Q && this.canAttack) {
            this.canAttack = false;
            let poison = this.keyboard.E;
            setTimeout(() => {
                this.createNewBubble(poison);
                this.canAttack = true;
            }, 2000);
        }
    }

    /**
     * checks if the character can attack and if the attack button is pressed
     */
    checkFinSlap() {
        if (this.keyboard.SPACE && this.canAttack) {
            this.canAttack = false;
            setTimeout(() => {
                this.createFinSlap();
            }, 500);
            setTimeout(() => {
                this.removeFinSlap();
                this.canAttack = true;
            }, 2000);
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
     * removes the finslap Object
     */
     removeFinSlap() {
        this.finSlapObject = [];
    }

     /**
     * removes the enemy from the game
     * 
     * @param {Object} enemy the enemy that is removed
     */
     removeEnemy(enemy) {
        let index = this.level.enemies.findIndex(fish => fish === enemy);
        if (index !== -1) {
            this.level.enemies.splice(index, 1);
        }
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
     * checks the character position in relation to the boss
     */
    checkCharacterPosition() {
        if (this.bossSpawned) {
            this.level.enemies.forEach((boss) => {
                if (boss instanceof Endboss) {
                    this.character.moveToCharacter(boss);
                }
            });
        }
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
                    setTimeout(() => {
                        this.character.stopAllInterval();
                        this.gameOverScreen(false, this.level.number);
                    }, 3500);
                }
            }
        });
    }

    /**
     * checks Collsision ftom the throwable Objets with enemys
     */
    checkCollisionsThrowableObjects() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((throwableObject) => {
                this.checkThrowsWithEnemys(enemy, throwableObject);
            });
        });
    }

    /**
     * checks if the Collision has happened with the specific enemy
     * 
     * @param {Object} enemy the enemy
     * @param {Object} throwableObject the thrown Object 
     */
    checkThrowsWithEnemys(enemy, throwableObject) {
        if (throwableObject.isColliding(enemy) && enemy instanceof Jellyfish) {
            this.createnewJellyBubble(enemy);
            this.removeEnemy(enemy);
            this.removeBubble(throwableObject);
        } if (throwableObject.isColliding(enemy) && enemy instanceof Endboss) {
            enemy.hit(throwableObject);
            if (enemy.isDead()) {
                setTimeout(() => {
                    this.character.stopAllInterval();
                    this.gameOverScreen(true, this.level.number);
                }, 1200)
            }
        }
    }

    /**
     * checks the Collsion with the finslap attack
     */
    checkCollisionsFinSlap() {
        this.level.enemies.forEach((enemy) => {
            this.finSlapObject.forEach((attack) => {
                if (attack.isColliding(enemy) && enemy instanceof PufferfishGreen || enemy instanceof PufferfishRed) {
                    this.removeEnemy(enemy);
                    this.enemyHitSound();
                    let color = enemy instanceof PufferfishGreen;
                    this.createNewBubble(false, color);
                } if (attack.isColliding(enemy) && enemy instanceof Endboss) {
                    this.hurtEndboss(enemy);
                }
            });
        });
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
        if (this.level.number == 0 && this.character.x > 2800) {
            this.character.stopAllInterval();
            this.gameOverScreen(true, 0);
        }
    }

    /**
     * shows the game over screen for the current level or situation
     * 
     * @param {boolean} win true if the game is beaten
     * @param {number} level the number of the level
     */
    gameOverScreen(win, level) {
        if (win && level <= 1) {
            document.getElementById('gameOverImg').src = "img/6.Botones/Tittles/You win/Recurso 21.png";
            document.getElementById('nextLevel').style.display = "flex";
        } else if (win && level == 2) {
            document.getElementById('gameOverImg').src = "img/6.Botones/Try again/Mesa de trabajo 1.png";
            document.getElementById('gameOverImg').style.width = "90%"
        } else if (!win) {
            document.getElementById('restartGame').style.display = "flex";
        }
        document.getElementById('gameOverScreen').style.display = "flex";
    }

    /**
     * checks if the character has collided with a collectable item
     */
    checkCollisionsCollectable() {
        this.level.collectables.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.character.gainItem(item);
            }
        })
    }

    /**
     * draws the Object on the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectables)
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.finSlapObject);

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

    /**
     * seperates the objects and adds it to the map
     * 
     * @param {Array} objects An array of objects
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
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
        if (mo instanceof Character) {
            if (mo.upDirection && !mo.downDirection) {
                this.rotateImageUp(mo);
            }
            else if (!mo.upDirection && mo.downDirection) {
                this.rotateImageDown(mo);
            }
            else {
                this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            }
        } else {
            if (mo.upDirection && !mo.downDirection) {
                this.rotateImageDown(mo);
            }
            else if (!mo.upDirection && mo.downDirection) {
                this.rotateImageUp(mo);
            }
            else {
                this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            }
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
        this.ctx.rotate(-Math.PI / 8);
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
        this.ctx.rotate(Math.PI / 8);
        this.ctx.translate(-(mo.x + mo.width / 2), -(mo.y + mo.height / 2));
    }

    /**
     * addas the Object to the map
     * 
     * @param {Object} mo the object that is added
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        } if (mo.upDirection || mo.downDirection) {
            this.rotateImage(mo);
        } this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
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
        if (mo instanceof PufferfishRed || mo instanceof PufferfishGreen || mo instanceof Jellyfish || mo instanceof Coin || mo instanceof Poison) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'hotpink';
            this.ctx.rect(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.width - mo.offsetX * 2, mo.height - mo.offsetY * 2);
            this.ctx.stroke();
        } else if (mo instanceof Character || mo instanceof ThrowableObject || mo instanceof FinSlap) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(mo.x + mo.offsetX * 1.5, mo.y + mo.offsetY * 1.7, mo.width - mo.offsetX * 2.5, mo.height - mo.offsetY * 2.5);
            this.ctx.stroke();
        } else if (mo instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(mo.x + mo.offsetX, mo.y + mo.offsetY * 1.7, mo.width - mo.offsetX * 6, mo.height - mo.offsetY * 2.5);
            this.ctx.stroke();
        }
    }
    
}