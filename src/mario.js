class Mario extends Item{
  constructor({
    x = 10,
    y = 100,
    width = 100,
    height = 100,
    movingDistance = 20,
    img
  }) {
    super(x, y, width, height, img);
    this.dir = 1;
    this.isMoving = false;
    this.isJumping = false;
    this.jumpLimit = 100;
    this.movingDistance = movingDistance;
  }

  move() {
    if (this.isMoving) {
      this.x += (this.dir * this.movingDistance);   

      if (this.isJumping) {}
    }
  }

  show() {
    const dir = this.dir < 0 ? 'l' : 'r';
    image(this.img[`mario_${dir}${this.isMoving ? 'w' : ''}`], this.x, this.y, this.width, this.height);
  }

  setMoving(isMoving) {
    this.isMoving = isMoving || false;
  }

  jump() {
    this.isJumping = true;
  }

  setDirection(dir) {
    this.dir = dir;
  }
}