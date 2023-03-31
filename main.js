import { domAPI } from './DomApi.js';
import { makeVillage } from './makeVillage.js';
import { makeVillageView } from './makeVillageView.js';
import { mergeSortMailboxTown } from './mergeSortMailboxNodes.js';

function main() {
  const [ROOT_WIDTH, ROOT_HEIGHT] = [1500, 1000];
  const root = initRoot(ROOT_WIDTH, ROOT_HEIGHT);
  const village = makeVillage(ROOT_WIDTH, ROOT_HEIGHT);
  makeVillageView(village, root);

  const buttonNode = domAPI.querySelector('.mailbox-search-button');
  buttonNode.addEventListener('click', searchMailboxTown);
}

const searchMailboxTown = async () => {
  const mailboxTowns = searchMailbox();

  const unSortedTownInfo = mailboxTowns.map((townNode) => {
    return {
      name: townNode.dataset.name,
      mailboxSize: domAPI.querySelector('.mailbox', townNode).dataset.size,
    };
  });

  const sortedTownInfo = mergeSortMailboxTown(unSortedTownInfo);
  makeInfoView(unSortedTownInfo, sortedTownInfo);
  await wait(2);
  mailboxTowns.forEach((town) => (town.style.border = '3px solid red'));
};

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds는 0보다 큰 숫자만 입력해주세요.'));
    }
    setTimeout(resolve, seconds * 1000);
  });
};

const makeInfoView = (unSortedTownInfo, sortedTownInfo) => {
  const mailboxInfo = domAPI.querySelector('.mailbox-info');
  const unSortedTownTemplate = unSortedView(unSortedTownInfo);
  const sortedTownTemplate = sortedView(sortedTownInfo);

  mailboxInfo.innerHTML = unSortedTownTemplate + sortedTownTemplate;
};

const unSortedView = (unSortedTownInfo) => {
  const names = unSortedTownInfo.map((item) => item.name);
  const template = `
    <p>${names.join(', ')}총 ${names.length}개의 마을입니다.</p>
  `;
  return template;
};

const sortedView = (sortedTownInfo) => {
  const text = sortedTownInfo.map((item) => ` ${item.name} : ${item.mailboxSize}`);
  const template = `<p>우체통의 크기는<br>${text}<br>순입니다.</p>`;
  console.log(text);

  return template;
};

const searchMailbox = () => {
  const mailboxNodes = domAPI.getAllElementsByClassName('mailbox');
  return mailboxNodes.map((mailbox) => mailbox.parentElement);
};

const initRoot = (ROOT_WIDTH, ROOT_HEIGHT) => {
  const root = domAPI.querySelector('.root');
  root.style.width = `${ROOT_WIDTH}px`;
  root.style.height = `${ROOT_HEIGHT}px`;

  return root;
};

main();
