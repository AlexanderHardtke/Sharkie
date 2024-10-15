class DrawBorder extends world {
    /**
     * draws a border around the movable Object depending on the movable Object
     * 
     * @param {Object} mo movable Object in the game
     */
    drawBorder(mo) {
        if (mo instanceof PufferfishRed || mo instanceof PufferfishGreen || mo instanceof Jellyfish || mo instanceof Coin || mo instanceof Poison) {
            this.drawBorderEnemy(mo);
        } else if (mo instanceof Character || mo instanceof ThrowableObject || mo instanceof FinSlap) {
            this.drawBorderCharacter(mo);
        } else if (mo instanceof Endboss) {
            this.drawBorderEndboss(mo);
        }
    }

    /**
     * draws a border around normal enemys to make the collision visual 
     * 
     * @param {Object} mo normal enemys
     */
    drawBorderEnemy(mo) {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'hotpink';
        this.ctx.rect(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.width - mo.offsetX * 2, mo.height - mo.offsetY * 2);
        this.ctx.stroke();
    }

    /**
     * draws a border around the character and his attack to make the collision visual 
     * 
     * @param {Object} mo character and attacks
     */
    drawBorderCharacter(mo) {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(mo.x + mo.offsetX * 1.5, mo.y + mo.offsetY * 1.7, mo.width - mo.offsetX * 2.5, mo.height - mo.offsetY * 2.5);
        this.ctx.stroke();
    }

    /**
     * draws a border around the Endboss to make the collision visual 
     * 
     * @param {Object} mo endboss
     */
    drawBorderEndboss(mo) {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(mo.x + mo.offsetX, mo.y + mo.offsetY * 1.7, mo.width - mo.offsetX * 6, mo.height - mo.offsetY * 2.5);
        this.ctx.stroke();
    }

    //addedToMap(){}
    //this.drawBorder(mo);
}