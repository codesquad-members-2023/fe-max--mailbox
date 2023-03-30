import { getRandomBetween } from "../utils/index.js";

export default class VillageInfo {
  static sizeRatio = {
    min: 0.3,
    max: 0.4,
  };

  static positionRatio = {
    min: 0.1,
    max: 0.8,
  };

  constructor(name, parentInfo) {
    this.name = name;
    this.parentInfo = parentInfo;
    this.childrenInfos = [];
    this.generateSizeAndPosition();
  }

  generateSizeAndPosition() {
    this.generateSize();
    this.generatePosition();
  }

  generateSize() {
    this.width = getRandomBetween(
      this.parentInfo.width * VillageInfo.sizeRatio.min,
      this.parentInfo.width * VillageInfo.sizeRatio.max
    );
    this.height = getRandomBetween(
      this.parentInfo.height * VillageInfo.sizeRatio.min,
      this.parentInfo.height * VillageInfo.sizeRatio.max
    );
  }

  generatePosition() {
    this.top = getRandomBetween(
      (this.parentInfo.height - this.height) * VillageInfo.positionRatio.min,
      (this.parentInfo.height - this.height) * VillageInfo.positionRatio.max
    );
    this.left = getRandomBetween(
      (this.parentInfo.width - this.width) * VillageInfo.positionRatio.min,
      (this.parentInfo.width - this.width) * VillageInfo.positionRatio.max
    );

    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
  }

  isOverlappingWithSiblings() {
    const noSiblings = this.parentInfo.childrenInfos.length === 0;

    if (noSiblings) return;

    return this.parentInfo.childrenInfos.some(
      (siblingInfo) => this.checkOverlap(this, siblingInfo),
      this
    );
  }

  checkOverlap(villageInfo1, villageInfo2) {
    return !(
      villageInfo1.top > villageInfo2.bottom ||
      villageInfo1.left > villageInfo2.right ||
      villageInfo1.right < villageInfo2.left ||
      villageInfo1.bottom < villageInfo2.top
    );
  }

  isValidSize() {
    return this.width > 30 && this.height > 20;
  }

  createEl() {
    const el = document.createElement("div");
    const name = document.createElement("span");
    const innerWrapper = document.createElement("div");
    const mailBox = this.createMailBox();

    el.className = "village";
    innerWrapper.className = "inner-wrapper";
    name.className = "village-name";
    name.textContent = this.name;

    el.setAttribute("data-name", this.name);
    Object.assign(el.style, {
      position: "absolute",
      width: `${this.width}px`,
      height: `${this.height}px`,
      top: `${this.top}px`,
      left: `${this.left}px`,
    });

    innerWrapper.append(name, mailBox ?? "");
    el.append(innerWrapper);
    return el;
  }

  createMailBox() {
    if (Math.random() < 0.5) return null;
    const img = document.createElement("div");
    img.className = "mailbox";

    return img;
  }
}
