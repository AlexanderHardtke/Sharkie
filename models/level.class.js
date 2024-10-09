class Level {
    spawnEndboss;
    enemies;
    collectables;
    backgroundObject;
    level_end_x = 2200;

    constructor(spawnEndboss, enemies, collectables, backgroundObject) {
        this.spawnEndboss = spawnEndboss;
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObject = backgroundObject;
    }
}