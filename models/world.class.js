class World {
    character = new Character();
    bossSpawned = false;
    level = level1;
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
    isMuted = false;
    sounds = [];
    backgroundMusic = new Audio('audio/background_music.mp3')
    levels = [level0, level1, level2];

    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.draw();
        this.setWorld();
        this.run();
        this.backgroundMusic.play();
        this.sounds.push(this.backgroundMusic);
    }

    /**
     * sets the character in the world
     */
    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.winTurtorial();
            this.checkNearby();
            this.checkCollisions();
            this.checkCollisionsCollectable();
            this.checkThrowObjects();
            this.checkFinSlap();
            this.checkCollisionsThrowableObjects();
            this.checkCollisionsFinSlap();
            this.checkCharacterPosition();
            this.checkSpawnEndboss(this.level);
        }, 200);
    }

    checkSpawnEndboss(level) {
        if (this.character.x > level.spawnEndboss && !this.bossSpawned) {
            this.bossSpawned = true;
            let boss = new Endboss(level.spawnEndboss);
            this.level.enemies.push(boss);
        }
    }

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

    createFinSlap() {
        let slap = new FinSlap(this.character.x + 108, this.character.y + 88, this.character.otherDirection);
        this.finSlapObject.push(slap);
    }

    removeFinSlap() {
        this.finSlapObject = [];
    }

    createNewBubble(poison, color) {
        let bubble = new ThrowableObject(this.character.x + 108, this.character.y + 90, this.character.otherDirection, poison, color);
        this.throwableObjects.push(bubble);
    }

    removeBubble(obj) {
        let index = this.throwableObjects.findIndex(bubble => bubble === obj);
        if (index !== -1) {
            this.throwableObjects.splice(index, 1);
        }
    }

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
                        this.clearAllIntervals();
                        this.gameOverScreen(false, this.level.number);
                    }, 3500);
                }
            }
        });
    }

    checkCollisionsThrowableObjects() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((throwableObject) => {
                if (throwableObject.isColliding(enemy) && enemy instanceof Jellyfish) {
                    this.createnewJellyBubble(enemy);
                    this.removeEnemy(enemy);
                    this.removeBubble(throwableObject);
                } if (throwableObject.isColliding(enemy) && enemy instanceof Endboss) {
                    enemy.hit(throwableObject);
                    if (enemy.isDead()) {
                        setTimeout(() => {
                            this.clearAllIntervals();
                            this.gameOverScreen(true, this.level.number);
                        }, 1200)
                    }
                }
            });
        });
    }

    checkCollisionsFinSlap() {
        this.level.enemies.forEach((enemy) => {
            this.finSlapObject.forEach((attack) => {
                if (attack.isColliding(enemy) && enemy instanceof PufferfishGreen || enemy instanceof PufferfishRed) {
                    this.removeEnemy(enemy);
                    let color = enemy instanceof PufferfishGreen;
                    this.createNewBubble(false, color);
                } if (attack.isColliding(enemy) && enemy instanceof Endboss) {
                    this.hurtEndboss(enemy);
                }
            });
        });

    }

    createnewJellyBubble(jellyfish) {
        let bubble = new JellyfishCatched(jellyfish.x, jellyfish.y, jellyfish.dangerous);
        this.level.collectables.push(bubble);
    }

    removeEnemy(enemy) {
        let index = this.level.enemies.findIndex(fish => fish === enemy);
        if (index !== -1) {
            // let dying = this.level.enemies[index].dyingAudio;
            // dying.play();
            this.level.enemies.splice(index, 1);
        }
    }

    winTurtorial() {
       if (this.level.number == 0 && this.character.x > 2800) {
        this.clearAllIntervals();
        this.gameOverScreen(true, 0);
       }
    }

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

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    checkCollisionsCollectable() {
        this.level.collectables.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.character.gainItem(item);
            }
        })
    }

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