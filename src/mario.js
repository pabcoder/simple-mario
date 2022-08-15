class Mario {
  constructor(x = 10, y = 100) {
    this.x = x;
    this.y = y;
    this.dir = 1;
    this.isMoving = false;
  }

  move() {
    if (this.isMoving) {
      this.x += (this.dir * 20);    
    }
  }

  setMoving(isMoving) {
    this.isMoving = isMoving;
  }

  setDirection(dir) {
    this.dir = dir;
  }
}