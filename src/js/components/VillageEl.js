export default class VillageEl {
  constructor(parent) {
    this.parent = parent;
    this.children = [];
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
  }

  generateVillageSize() {
    this.width = Math.floor(this.parent.width * Math.random());
    this.height = Math.floor(this.parent.height * Math.random());
  }

  generateVillagePosition() {
    this.top = Math.floor(this.parent.height * Math.random());
    this.left = Math.floor(this.parent.width * Math.random());
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
  }

  isNotOverlapping() {
    return this.parent.children.every((el) => {
      return !(
        this.top > el.bottom ||
        this.left > el.right ||
        this.right < el.top ||
        this.bottom < el.top
      );
    });
  }
}
