export class Town {
  constructor(name, parentWidth, parentHeight) {
    this.name = name;
    this.MIN_WIDTH = 50;
    this.MIN_HEIGHT = 50;
    this.width = this.makeRandomLength(parentWidth, this.MIN_WIDTH);
    this.height = this.makeRandomLength(parentHeight, this.MIN_HEIGHT);
    this.pointX = this.makeRandomPoint(parentWidth, this.width);
    this.pointY = this.makeRandomPoint(parentHeight, this.height);
    this.children = [];
    this.hasMailbox = Math.random() < 0.3;
  }

  makeRandomLength(parentLength, minLength) {
    return Math.floor(Math.random() * (parentLength / 3 - minLength + 1)) + minLength;
  }

  makeRandomPoint(parentLength, length) {
    return Math.floor(Math.random() * (parentLength - length));
  }

  get info() {
    return {
      x: this.pointX,
      y: this.pointY,
      width: this.width,
      height: this.height,
    };
  }
}
