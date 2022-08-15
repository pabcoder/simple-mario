class Mario {
  constructor(x = 10, y = 100) {
    this.x = x;
    this.y = y;
    this.dir = 1;
  }

  move() {
    this.x += (this.dir * 20);    
  }

  setDirection(dir) {
    this.dir = dir;
  }
}