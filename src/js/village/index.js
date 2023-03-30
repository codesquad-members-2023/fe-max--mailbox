import VillageInfo from "./VillageInfo.js";
import { getRandomBetween } from "../utils/index.js";

const canvas = document.querySelector("#canvas");
const canvasRect = canvas.getBoundingClientRect();
const canvasInfo = {
  childrenInfos: [],
  width: canvasRect.width,
  height: canvasRect.height,
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
  let maxNumVillages = getRandomBetween(20, 30);
  const parentVillageInfos = [];
  let villageNameCode = 65;

  while (maxNumVillages > 0) {
    maxNumVillages--;
    const randIdx = getRandomBetween(0, parentVillageInfos.length + 1);
    const parentInfo =
      randIdx < parentVillageInfos.length
        ? parentVillageInfos[randIdx]
        : canvasInfo;

    const villageInfo = new VillageInfo(
      String.fromCharCode(villageNameCode),
      parentInfo
    );

    if (!villageInfo.isValidSize()) continue;

    if (!villageInfo.isOverlappingWithSiblings()) {
      villageNameCode++;
      parentVillageInfos.push(villageInfo);
      parentInfo.childrenInfos.push(villageInfo);
    }
  }
}
