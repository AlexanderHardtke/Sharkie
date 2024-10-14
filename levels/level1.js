const layers1 = [
    'img/3. Background/Layers/5. Water/D1.png',
    'img/3. Background/Layers/4.Fondo 2/D1.png',
    'img/3. Background/Layers/3.Fondo 1/D1.png',
    'img/3. Background/Layers/2. Floor/D1.png',
    'img/3. Background/Layers/1. Light/1.png',
];
const layers2 = [
    'img/3. Background/Layers/5. Water/D2.png',
    'img/3. Background/Layers/4.Fondo 2/D2.png',
    'img/3. Background/Layers/3.Fondo 1/D2.png',
    'img/3. Background/Layers/2. Floor/D2.png',
    'img/3. Background/Layers/1. Light/2.png',
];
const repetitions = 7;
const backgroundObjects = [];

for (let i = -1; i < repetitions; i++) {
    const currentLayerSet = i % 2 === 0 ? layers2 : layers1;
    for (let j = 0; j < currentLayerSet.length; j++) {
        backgroundObjects.push(new BackgroundObject(currentLayerSet[j], 720 * i));
    }
}
backgroundObjects.push(new BarrierLevelend('img/3. Background/Barrier/3.png', -600));
backgroundObjects.push(new BarrierLevelend('img/3. Background/Barrier/3.png', 4410));

const level1 = new Level(
    spawnEndboss = 100,
    [
        new PufferfishRed(500),
        new Jellyfish(),
    ],
    [
        new Coin(600, 350),
        new Coin(650, 300),
        new Coin(700, 250),
        new Coin(750, 300),
        new Coin(800, 350),
        new Poison(850, 370),
    ],
    backgroundObjects,
    level_end_x = 4360,
    number = 1
);