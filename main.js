import { makeVillageView } from './makeVillageView.js';
import { villageMaker } from './villageMaker.js';

function main() {
  const root = document.querySelector('.root');
  const village = villageMaker();

  makeVillageView(village, root);
}

main();
