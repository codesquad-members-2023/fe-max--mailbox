export default class VillageInfo {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.childrenEls = [];
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
  }

  generateVillageSize() {
    this.width = Math.floor(this.parentEl.width * Math.random());
    this.height = Math.floor(this.parentEl.height * Math.random());
  }

  generateVillagePosition() {
    this.top = Math.floor(this.parentEl.height * Math.random());
    this.left = Math.floor(this.parentEl.width * Math.random());
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
  }

  isNotOverlapping() {
    return this.parentEl.childrenEls.every((el) => {
      return !(
        this.top > el.bottom ||
        this.left > el.right ||
        this.right < el.top ||
        this.bottom < el.top
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
