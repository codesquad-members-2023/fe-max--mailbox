export default class VillageInfo {
  constructor(parentInfo) {
    this.parentInfo = parentInfo;
    this.childrenInfos = [];
    this.generateSizeAndPosition();
  }

  generateSizeAndPosition() {
    this.generateSize();
    this.generatePosition();
  }

  generateSize() {
    this.width = Math.floor(this.parentInfo.width * Math.random());
    this.height = Math.floor(this.parentInfo.height * Math.random());
  }

  generatePosition() {
    this.top = Math.floor(this.parentInfo.height * Math.random());
    this.left = Math.floor(this.parentInfo.width * Math.random());
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
  }

  isOverlapping() {
    return this.parentInfo.childrenInfos.every((childInfo) => {
      return (
        this.top > childInfo.bottom ||
        this.left > childInfo.right ||
        this.right < childInfo.top ||
        this.bottom < childInfo.top
      );
    });
  }

  createEl() {
    const el = document.createElement("div");
    const innerWrapper = document.createElement("div");

    el.className = "village";
    innerWrapper.className = "inner-wrapper";

    Object.assign(el.style, {
      position: "absolute",
      width: this.width + "px",
      height: this.height + "px",
      top: this.top + "px",
      bottom: this.bottom + "px",
      left: this.left + "px",
      right: this.right + "px",
    });
    Object.assign(innerWrapper.style, {
      position: "relative",
    });

    el.append(innerWrapper);
    return el;
  }
}
