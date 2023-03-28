import { villageMaker } from './villageMaker.js';

function main() {
  const root = document.querySelector('.root');

  const towns = villageMaker();
  makeVillageView(towns, root);
}

const makeVillageView = (towns, parent = root) => {
  const townsView = towns.map(createTownNode);
  parent.append(...townsView);
};

const createTownNode = (town) => {
  const element = document.createElement('div');
  element.classList.add('town', town.name);
  element.style.width = `${town.width}px`;
  element.style.height = `${town.height}px`;
  element.style.top = `${town.pointY}px`;
  element.style.left = `${town.pointX}px`;
  element.style.position = 'absolute';

  if (town.children) {
    makeVillageView(town.children, element);
  }

  return element;
};

main();
