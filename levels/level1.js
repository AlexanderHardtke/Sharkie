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
const repetitionsLevel1 = 7;
const backgroundObjectsLevel1 = [];

for (let i = -1; i < repetitionsLevel1; i++) {
    const currentLayerSet = i % 2 === 0 ? layers2 : layers1;
    for (let j = 0; j < currentLayerSet.length; j++) {
        backgroundObjectsLevel1.push(new BackgroundObject(currentLayerSet[j], 720 * i));
    }
}
backgroundObjectsLevel1.push(new BarrierLevelend('img/3. Background/Barrier/3.png', -600));
backgroundObjectsLevel1.push(new BarrierLevelend('img/3. Background/Barrier/3.png', 4410));

const level1 = new Level(
    spawnEndboss = 200,
    [
        // new PufferfishGreen(450),
        // new PufferfishGreen(400),
        // new PufferfishGreen(425),
        // new PufferfishRed(1400),
        // new Jellyfish(1000),
    ],
    [
        new Coin(600, 350),
        new Coin(650, 300),
        new Coin(700, 250),
        new Coin(750, 300),
        new Coin(800, 350),
        new Poison(850, 370),
    ],
    backgroundObjectsLevel1,
    level_end_x = 4360,
    number = 1
);