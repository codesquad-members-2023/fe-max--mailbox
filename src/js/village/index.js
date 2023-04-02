import VillageInfo from "./VillageInfo.js";
import { getRandomBetween } from "../utils/index.js";
import { customQuerySelector } from "../utils/customQuerySelector.js";

const villageMap = customQuerySelector("#village-map");
const villageMapRect = villageMap.getBoundingClientRect();
const villageMapInfo = {
  childrenInfos: [],
  width: villageMapRect.width,
  height: villageMapRect.height,
};

export function renderVillageEls() {
  createVillageInfos();

  villageMapInfo.childrenInfos.forEach((childInfo) => {
    villageMap.append(createVillageEl(childInfo));
  });
}

function createVillageEl(villageInfo) {
  const villageEl = villageInfo.createEl();

  customQuerySelector(".inner-wrapper", villageEl).append(
    ...villageInfo.childrenInfos.map((childInfo) => createVillageEl(childInfo))
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
        : villageMapInfo;

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
