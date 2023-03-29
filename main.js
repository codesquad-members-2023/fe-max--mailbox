import { makeVillageView } from './makeVillageView.js';
import { villageMaker } from './villageMaker.js';
import { setMailboxSize } from './setMailboxSize.js';

function main() {
  const root = document.querySelector('.root');
  const village = setMailboxSize(villageMaker());

  makeVillageView(village, root);
}

main();
