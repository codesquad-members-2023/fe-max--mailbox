export const isOverlapWithPreTowns = (towns, town) => {
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
