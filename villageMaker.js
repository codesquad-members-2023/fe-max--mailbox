import { Town } from './Town.js';

const isOverlap = (prevTownInfo, currentTownInfo) => {
  if (
    prevTownInfo.x + prevTownInfo.width <= currentTownInfo.x ||
    currentTownInfo.x + currentTownInfo.width <= prevTownInfo.x
  ) {
    return false;
  }

  if (
    prevTownInfo.y + prevTownInfo.height <= currentTownInfo.y ||
    currentTownInfo.y + currentTownInfo.height <= prevTownInfo.y
  ) {
    return false;
  }

  return true;
};

const hasOverlapPretown = (towns, town) => {
  return towns.some((prevTown) => isOverlap(prevTown.info, town.info));
};

export const villageMaker = (parentWidth = 1500, parentHeight = 1000) => {
  const MAX_TOWN_COUNT = 10;
  let makeTrialCount = 0;
  const towns = [];

  while (towns.length < MAX_TOWN_COUNT) {
    if (makeTrialCount === 3) {
      return towns;
    }

    const town = new Town(towns.length, parentWidth, parentHeight);
    if (towns.length && hasOverlapPretown(towns, town)) {
      makeTrialCount++;
      continue;
    }
    towns.push(town);
  }

  return towns;
};
