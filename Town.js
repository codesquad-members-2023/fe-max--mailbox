import { villageMaker } from './villageMaker.js';

export class Town {
  constructor(name, parentWidth, parentHeight) {
    this.name = name;
    this.MIN_WIDTH = 100;
    this.MIN_HEIGHT = 100;
    this.width = this.makeRandomLength(parentWidth, this.MIN_WIDTH);
    this.height = this.makeRandomLength(parentHeight, this.MIN_HEIGHT);
    this.pointX = this.makeRandomPoint(parentWidth, this.width);
    this.pointY = this.makeRandomPoint(parentHeight, this.height);
    this.children = this.makeChildren();
    this.hasMailbox = Math.random() < 0.4;
  }

  makeChildren() {
    if (this.width <= this.MIN_WIDTH || this.height <= this.MIN_HEIGHT) {
      return;
    }
    return villageMaker(this.width, this.height);
  }

  makeRandomLength(parentLength, minLength) {
    return Math.floor(Math.random() * (parentLength / 2 - minLength + 1)) + minLength;
  }

  makeRandomPoint(parentLength, length) {
    return Math.floor(Math.random() * (parentLength - 10 - length));
  }
}
