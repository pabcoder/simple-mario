class Item {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}