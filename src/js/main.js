import { makeVillage } from './town/makeVillage.js';
import { makeVillageView } from './view/makeVillageView.js';
import { buttonClickEvent } from './event/event.js';
import { initRoot } from './view/initRoot.js';

function main() {
  const [ROOT_WIDTH, ROOT_HEIGHT] = [1500, 1000];
  const root = initRoot(ROOT_WIDTH, ROOT_HEIGHT);
  const village = makeVillage(ROOT_WIDTH, ROOT_HEIGHT);
  makeVillageView(village, root);
  buttonClickEvent();
}

main();
