import { isOverlapWithPreTowns } from './isOverlapWithPreTowns.js';
import { Town } from './Town.js';

export const makeVillage = (parentWidth = rootWidth, parentHeight = rootHeight) => {
  const village = [];
  const MAX_TOWN_COUNT = 10;
  let trialCount = 0;

  while (village.length < MAX_TOWN_COUNT) {
    const isLastTrial = trialCount === 3;
    if (isLastTrial) {
      return village;
    }

    const town = new Town(parentWidth, parentHeight);
    if (village.length && isOverlapWithPreTowns(village, town)) {
      trialCount++;
      continue;
    }

    town.setTown();
    village.push(town);
  }

  return village;
};
