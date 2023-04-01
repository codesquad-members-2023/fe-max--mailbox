import { makeRandomNumber } from '../utils/utils.js';
import { makeVillage } from './makeVillage.js';

export class Town {
  static nameASCII = 65;
  static mailboxSizeStorage = new Map();

  constructor(parentWidth, parentHeight) {
    this.SMALLEST_LENGTH = 100;
    this.SMALLEST_SPACE = 10;
    this.name = '';
    this.width = this.makeRandomLength(parentWidth, this.SMALLEST_LENGTH);
    this.height = this.makeRandomLength(parentHeight, this.SMALLEST_LENGTH);
    this.pointX = this.makeRandomPoint(parentWidth, this.width);
    this.pointY = this.makeRandomPoint(parentHeight, this.height);
    this.children = [];
    this.hasMailbox = Math.random() < 0.4;
    this.mailboxSize = 0;
  }

  setTown() {
    this.name = String.fromCharCode(Town.nameASCII++);
    this.makeChildren();
    this.setMailboxSize();
  }

  setMailboxSize() {
    const MAX_MAILBOX_SIZE = 100;
    const MIN_MAILBOX_SIZE = 1;

    let randomSize = makeRandomNumber(MIN_MAILBOX_SIZE, MAX_MAILBOX_SIZE);

    while (Town.mailboxSizeStorage.has(randomSize)) {
      randomSize = makeRandomNumber(MIN_MAILBOX_SIZE, MAX_MAILBOX_SIZE);
    }

    Town.mailboxSizeStorage.set(randomSize, this.name);
    this.mailboxSize = randomSize;
  }

  makeChildren() {
    if (this.width <= this.SMALLEST_LENGTH || this.height <= this.SMALLEST_LENGTH) {
      return;
    }
    this.children = makeVillage(this.width, this.height);
  }

  makeRandomLength(parentLength, smallestLength) {
    const maxLength = parentLength / 2 - smallestLength;
    const minLength = smallestLength - this.SMALLEST_SPACE;

    return makeRandomNumber(minLength, maxLength);
  }

  makeRandomPoint(parentLength, distance) {
    const maxPoint = parentLength - this.SMALLEST_SPACE * 2 - distance;
    const minPoint = this.SMALLEST_SPACE;

    return makeRandomNumber(minPoint, maxPoint);
  }
}
