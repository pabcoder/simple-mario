let sideSize;
let img;
let mario;
let moving = false;
let currentStep = 1;
let marioHeight = 175;
let marioWidth = 100;
let marioY;

function preload() {
  img = {
    mario_r: loadImage('../assets/mario_r.png'),
    mario_rw: loadImage('../assets/mario_rw.gif'),
    mario_l: loadImage('../assets/mario_l.png'),
    mario_lw: loadImage('../assets/mario_lw.gif'),
    block: loadImage('../assets/block.png')
  }
}

function setup() {
  frameRate(10);
  sideSize = windowWidth > windowHeight ? windowHeight - 20 : windowWidth - 20;
  marioY = (sideSize / 3) * 2;
  mario = new Mario(0, marioY);
  createCanvas(sideSize, sideSize);
}

function draw () {
  background(175);
  const dir = mario.dir < 0 ? 'l' : 'r';

  image(img[`mario_${dir}${moving ? 'w' : ''}`], mario.x, mario.y, marioWidth, marioHeight);
  for (let i = 0; i < sideSize; i = i + 100) {
    image(img.block, i, marioY + 175, 100, 100);
  }
} 