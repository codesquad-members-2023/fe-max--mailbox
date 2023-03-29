import { villageMaker } from './villageMaker.js';

export class Town {
  constructor(parentWidth, parentHeight) {
    this.name = '';
    this.MIN_WIDTH = 100;
    this.MIN_HEIGHT = 100;
    this.width = this.makeRandomLength(parentWidth, this.MIN_WIDTH);
    this.height = this.makeRandomLength(parentHeight, this.MIN_HEIGHT);
    this.pointX = this.makeRandomPoint(parentWidth, this.width);
    this.pointY = this.makeRandomPoint(parentHeight, this.height);
    this.children = this.makeChildren();
    this.hasMailbox = Math.random() < 0.4;
    this.mailboxSize = 0;
  }

  setName(name) {
    this.name = name;
  }

  setMailboxSize(size) {
    this.mailboxSize = size;
  }

  makeChildren() {
    if (this.width <= this.MIN_WIDTH || this.height <= this.MIN_HEIGHT) {
      return;
    }
    return villageMaker(this.width, this.height);
  }

  makeRandomLength(parentLength, minLength) {
    return Math.floor(Math.random() * (parentLength / 2 - minLength)) + (minLength - 10);
  }

  makeRandomPoint(parentLength, length) {
    return Math.floor(Math.random() * (parentLength - 20 - length)) + 10;
  }
}

export const townNameMaker = {
  townNameStorage: [],

  makeName(village) {
    village.forEach((el) => {
      const townName = String.fromCharCode(this.townNameStorage.length + 65);
      this.townNameStorage.push(townName);
      el.setName(townName);

      if (el.children) {
        this.makeName(el.children);
      }
    });
  },
};

export const mailboxSizeMaker = {
  mailboxSizeStorage: new Map(),

  makeAllMailboxSize(village) {
    village.forEach((el) => {
      while (el.hasMailbox) {
        const randomSize = Math.floor(Math.random() * 100) + 1;
        if (!this.mailboxSizeStorage.has(randomSize)) {
          el.setMailboxSize(randomSize);
          this.mailboxSizeStorage.set(randomSize, el.name);
          break;
        }
      }
      if (el.children) {
        this.makeAllMailboxSize(el.children);
      }
    });
  },
};
