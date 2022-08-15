let sideSize;
let img;
let mario;
let moving = false;
let currentStep;
let marioHeight;
let marioWidth;
let marioY;
let screenRatio;

let blockSide;
let blockY;

let blocks = [];

const initialSizes = {
  movingDistance: 20,
  marioHeight: 175,
  marioWidth: 100,
  blockSide: 100
}

function preload() {
  img = {
    mario_r: loadImage('../assets/mario_r.png'),
    mario_rw: loadImage('../assets/mario_rw.gif'),
    mario_l: loadImage('../assets/mario_l.png'),
    mario_lw: loadImage('../assets/mario_lw.gif'),
    block: loadImage('../assets/block.png'),
    cloud: loadImage('../assets/cloud.png')
  }
}

function setup() {
  frameRate(30);
  sideSize = windowWidth > windowHeight ? windowHeight - 20 : windowWidth - 20;
  blockSide = (sideSize / 12),
  screenRatio = blockSide / initialSizes.blockSide;
  
  marioHeight = initialSizes.marioHeight * screenRatio;
  marioWidth = initialSizes.marioWidth * screenRatio;

  blockY = sideSize - (blockSide * 2);
  marioY = (sideSize - (blockSide * 2)) - marioHeight;

  mario = new Mario({
    x: 0,
    y: marioY,
    width: marioWidth,
    height: marioHeight,
    movingDistance: (initialSizes.movingDistance * screenRatio),
    img: (({ mario_r, mario_rw, mario_l, mario_lw }) => ({ mario_r, mario_rw, mario_l, mario_lw }))(img)
  });

  for (let i = 0; i < 12; i++) {
    blocks.push(
      new Item(
        i * blockSide,
        blockY,
        blockSide,
        blockSide,
        img.block
      )
    )
  }

  createCanvas(sideSize, sideSize);
}

function draw () {
  background(92, 148, 252);

  if (!mario.isMoving) {
    if (keyIsDown(LEFT_ARROW)) {
      mario.setDirection(-1);
      mario.setMoving(true);
    } else if (keyIsDown(RIGHT_ARROW)) {
      mario.setDirection(1);
      mario.setMoving(true);
    }
  } else {
    mario.move();
  }
  
  mario.show();
  
  blocks.forEach(b => b.show());
}

function keyReleased() {
  mario.setMoving(false);
}