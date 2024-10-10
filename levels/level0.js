const level0 = new Level(
    spawnEndboss = 3500,
    [
        new PufferfishGreen(1150),
        new Jellyfish(2100),
    ],
    [
        new Coin(1510, 200),
        new Poison(1640, 190)
    ],
    [

        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/8.Instructions/move_sharkie.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 719),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719),
        new BackgroundObject('img/8.Instructions/fin_slap.png', 719),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719 * 2),
        new BackgroundObject('img/8.Instructions/collect_items.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719 * 3),
        new BackgroundObject('img/8.Instructions/shoot_bubble.png', 719 * 2.5),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 4),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 4),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719 * 4),
        new BackgroundObject('img/8.Instructions/good_luck.png', 719 * 3 + 300),
        new BarrierLevelend('img/3. Background/Barrier/3.png', -600)
    ],
    level_end_x = 3000,
    number = 0,
);