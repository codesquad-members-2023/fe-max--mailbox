import { makeVillageView } from './makeVillageView.js';
import { villageMaker } from './villageMaker.js';
import { mailboxSizeMaker, townNameMaker } from './Town.js';

function main() {
  const root = document.querySelector('.root');
  const village = villageMaker();
  townNameMaker.makeName(village);
  mailboxSizeMaker.makeAllMailboxSize(village);
  makeVillageView(village, root);
}

main();
