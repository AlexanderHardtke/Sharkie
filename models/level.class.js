class Level {
    enemies;
    collectables;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies, collectables, backgroundObject) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObject = backgroundObject;
    }
}