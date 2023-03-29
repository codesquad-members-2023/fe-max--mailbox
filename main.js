import { domAPI } from './DomApi.js';
import { makeVillage } from './makeVillage.js';
import { makeVillageView } from './makeVillageView.js';
const [ROOT_WIDTH, ROOT_HEIGHT] = [1500, 1000];

function main() {
  const root = domAPI.querySelector('.root');
  const village = makeVillage(ROOT_WIDTH, ROOT_HEIGHT);

  makeVillageView(village, root);
  searchMailbox();
}

const searchMailbox = () => {
  const buttonNode = domAPI.getElementByTagName('button');
  const mailboxNodes = domAPI.getAllElementsByClassName('mailbox');
  console.log(buttonNode, mailboxNodes);
};

main();
