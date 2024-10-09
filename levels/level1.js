const level1 = new Level(
        100,
    [
        new PufferfishGreen(300),
        // new PufferfishRed(500),
        new Jellyfish(),
    ],
    [
        new Coin(600,350),
        new Coin(650,300),
        new Coin(700,250),
        new Coin(750,300),
        new Coin(800,350),
        new Poison(850,370),
        new JellyfishCatched(150,250, true),
        new JellyfishCatched(150,300, false),
    ],
    [
        
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719*2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719*2),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719*3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719*3),
        new BarrierLevelend('img/3. Background/Barrier/3.png', -600),
        new BarrierLevelend('img/3. Background/Barrier/3.png', 2250)
    ]
);