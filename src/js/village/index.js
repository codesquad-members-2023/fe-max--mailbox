import VillageInfo from "./VillageInfo.js";
import { getRandomBetween } from "../utils/index.js";

const canvas = document.querySelector("#canvas");
const canvasRect = canvas.getBoundingClientRect();
const canvasInfo = {
  childrenInfos: [],
  width: canvasRect.width,
  height: canvasRect.height,
  top: 0,
  left: 0,
  getBottom() {
    return this.top + this.height;
  },
  getRight() {
    return this.left + this.width;
  },
};
const createdVillageNames = new Set();

export function renderVillageEls() {
  createVillageInfos();

  canvasInfo.childrenInfos.forEach((childInfo) => {
    if (createdVillageNames.has(childInfo.name)) return;
    canvas.append(createVillageEl(childInfo));
  });
}

function createVillageEl(villageInfo) {
  createdVillageNames.add(villageInfo.name);
  const villageEl = villageInfo.createEl();
  villageEl
    .querySelector(".inner-wrapper")
    .append(
      ...villageInfo.childrenInfos.map((childInfo) =>
        createVillageEl(childInfo)
      )
    );
  return villageEl;
}

function createVillageInfos() {
  let maxNumVillages = getRandomBetween(5, 15);
  const parentVillageInfos = [];
  let villageNameCode = 65;

  while (maxNumVillages > 0) {
    maxNumVillages--;
    const parentInfo =
      parentVillageInfos.length > 0
        ? parentVillageInfos[getRandomBetween(0, parentVillageInfos.length)]
        : canvasInfo;

    const villageInfo = new VillageInfo(
      String.fromCharCode(villageNameCode),
      parentInfo
    );

    if (!villageInfo.isValidSize()) break;

    if (checkOverlapWithSiblings(villageInfo)) {
      villageNameCode++;
      parentVillageInfos.push(villageInfo);
      parentInfo.childrenInfos.push(villageInfo);
    }
  }
}

function checkOverlapWithSiblings(villageInfo) {
  for (let i = 0; i < 10; i++) {
    if (villageInfo.isOverlappingWithSiblings()) {
      villageInfo.generateSizeAndPosition();
    } else {
      return true;
    }
  }
  return false;
}
