import { isOverlapWithPreTowns } from './isOverlapWithPreTowns.js';
import { mailboxSizeMaker, townNameMaker } from './villageUtils.js';

export const makeVillage = (rootWidth, rootHeight) => {
  const village = villageMaker(rootWidth, rootHeight);
  townNameMaker.makeName(village);
  mailboxSizeMaker.makeAllMailboxSize(village);

  return village;
};

const villageMaker = (parentWidth = rootWidth, parentHeight = rootHeight) => {
  const village = [];
  const MAX_TOWN_COUNT = 10;
  let trialCount = 0;

  while (village.length < MAX_TOWN_COUNT) {
    if (trialCount === 3) {
      return village;
    }

    const town = new Town(parentWidth, parentHeight);
    if (village.length && isOverlapWithPreTowns(village, town)) {
      trialCount++;
      continue;
    }

    village.push(town);
  }

  return village;
};

class Town {
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
