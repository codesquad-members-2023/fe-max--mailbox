import { Town } from './Town.js';

export const villageMaker = (parentWidth = 1500, parentHeight = 1000) => {
  const MAX_TOWN_COUNT = 10;
  const village = [];
  let trialCount = 0;

  while (village.length < MAX_TOWN_COUNT) {
    if (trialCount === 3) {
      return village;
    }

    const town = new Town(parentWidth, parentHeight);
    if (village.length && isOverlapWithPreTowns(village, town)) {
      trialCount++;
      continue;
    }

    village.push(town);
  }

  return village;
};

const isOverlapWithPreTowns = (towns, town) => {
  return towns.some((prevTown) => isOverlap(prevTown, town));
};

const isOverlap = (prevTown, currentTown) => {
  if (
    isLocatedLeft(prevTown, currentTown) ||
    isLocatedRight(prevTown, currentTown) ||
    isLocatedTop(prevTown, currentTown) ||
    isLocatedBottom(prevTown, currentTown)
  ) {
    return false;
  }

  return true;
};

const isLocatedLeft = (prevTown, currentTown) => {
  return prevTown.pointX + prevTown.width < currentTown.pointX;
};

const isLocatedRight = (prevTown, currentTown) => {
  return currentTown.pointX + currentTown.width < prevTown.pointX;
};

const isLocatedTop = (prevTown, currentTown) => {
  return prevTown.pointY + prevTown.height < currentTown.pointY;
};

const isLocatedBottom = (prevTown, currentTown) => {
  return currentTown.pointY + currentTown.height < prevTown.pointY;
};
