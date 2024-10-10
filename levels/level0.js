const level0 = new Level(
    spawnEndboss = 500,
    [
        new PufferfishGreen(1000),
    ],
    [
        new Coin(600, 350),
        new Poison(850, 370)
    ],
    [

        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 719),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719 * 3),
        new BarrierLevelend('img/3. Background/Barrier/3.png', -600),
        new BarrierLevelend('img/3. Background/Barrier/3.png', 2250)
    ],
    level_end_x = 2200,
    number = 1,
);