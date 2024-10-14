class Level {
    spawnEndboss;
    enemies;
    collectables;
    backgroundObject;
    level_end_x;
    number;

    constructor(spawnEndboss, enemies, collectables, backgroundObject, level_end_x, number) {
        this.spawnEndboss = spawnEndboss;
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObject = backgroundObject;
        this.level_end_x = level_end_x;
        this.number = number;
    }
}