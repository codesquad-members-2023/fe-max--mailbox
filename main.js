import { villageMaker } from './villageMaker.js';

function main() {
  const root = document.querySelector('root');

  const towns = villageMaker();
  makeVillageView(towns);
  console.log(towns);
}

const makeVillageView = (towns) => {
  const main = document.querySelector('.root');
  const townsView = towns.map(createTownNode);
  main.append(...townsView);
};

const createTownNode = (town) => {
  const element = document.createElement('div');
  element.classList.add('town', town.name);
  element.style.width = `${town.width}px`;
  element.style.height = `${town.height}px`;
  element.style.top = `${town.pointY}px`;
  element.style.left = `${town.pointX}px`;
  element.style.position = 'absolute';
  return element;
};

main();
