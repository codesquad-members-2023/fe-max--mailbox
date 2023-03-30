import { getRandomBetween } from "../utils/index.js";

export default class VillageInfo {
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
      this.parentInfo.width * 0.3,
      this.parentInfo.width * 0.4
    );
    this.height = getRandomBetween(
      this.parentInfo.height * 0.3,
      this.parentInfo.height * 0.4
    );
  }

  generatePosition() {
    this.top = getRandomBetween(
      (this.parentInfo.height - this.height) * 0.1,
      (this.parentInfo.height - this.height) * 0.8
    );
    this.left = getRandomBetween(
      (this.parentInfo.width - this.width) * 0.1,
      (this.parentInfo.width - this.width) * 0.8
    );

    this.bottom = this.getBottom();
    this.right = this.getRight();
  }

  getBottom() {
    return this.top + this.height;
  }

  getRight() {
    return this.left + this.width;
  }

  isOverlappingWithSiblings() {
    if (this.parentInfo.childrenInfos.length === 0) return;

    return this.parentInfo.childrenInfos.some(
      (siblingInfo) => this.checkOverlap(this, siblingInfo),
      this
    );
  }

  checkOverlap(villageInfo1, villageInfo2) {
    return !(
      villageInfo1.top > villageInfo2.getBottom() ||
      villageInfo1.left > villageInfo2.getRight() ||
      villageInfo1.getRight() < villageInfo2.left ||
      villageInfo1.getBottom() < villageInfo2.top
    );
  }

  isValidSize() {
    return this.width > 20 && this.height > 20;
  }

  createEl() {
    const el = document.createElement("div");
    const span = document.createElement("span");
    const innerWrapper = document.createElement("div");

    el.className = "village";
    innerWrapper.className = "inner-wrapper";
    span.textContent = this.name;

    Object.assign(el.style, {
      position: "absolute",
      width: this.width + "px",
      height: this.height + "px",
      top: this.top + "px",
      left: this.left + "px",
    });

    innerWrapper.append(span);
    el.append(innerWrapper);
    return el;
  }
}
