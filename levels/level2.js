const repetitionsLevel2 = 10;
const backgroundObjectsLevel2 = [];

for (let i = -1; i < repetitionsLevel2; i++) {
    const currentLayerSet = i % 2 === 0 ? layers2 : layers1;
    for (let j = 0; j < currentLayerSet.length; j++) {
        backgroundObjectsLevel2.push(new BackgroundObject(currentLayerSet[j], 720 * i));
    }
}
backgroundObjectsLevel2.push(new BarrierLevelend('img/3. Background/Barrier/3.png', -600));
backgroundObjectsLevel2.push(new BarrierLevelend('img/3. Background/Barrier/3.png', 4410));

const level2 = new Level(
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
    backgroundObjectsLevel2,
    level_end_x = 4360,
    number = 1
);