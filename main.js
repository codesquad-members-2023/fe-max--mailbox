import { domAPI } from './DomApi.js';
import { makeVillage } from './makeVillage.js';
import { makeVillageView } from './makeVillageView.js';
import { mergeSortMailboxTown } from './mergeSortMailboxNodes.js';

function main() {
  const [ROOT_WIDTH, ROOT_HEIGHT] = [1500, 1000];
  const root = initRoot(ROOT_WIDTH, ROOT_HEIGHT);
  const village = makeVillage(ROOT_WIDTH, ROOT_HEIGHT);
  makeVillageView(village, root);

  // TODO: 버튼 클릭 이벤트 등록해야 함
  const buttonNode = domAPI.querySelector('.mailbox-search-button');
  buttonNode.addEventListener('click', searchMailboxTown);
}

const searchMailboxTown = () => {
  const mailboxTowns = searchMailbox();

  const unSortedTownInfo = mailboxTowns.map((townNode) => {
    return {
      name: townNode.dataset.name,
      mailboxSize: townNode.firstChild.dataset.size,
    };
  });

  const sortedTownInfo = mergeSortMailboxTown(unSortedTownInfo);
  makeInfoView(unSortedTownInfo, sortedTownInfo);
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
    <p>${names.join(', ')} 총 ${names.length}개의 마을입니다.</p>
  `;
  return template;
};

const sortedView = (sortedTownInfo) => {
  const names = sortedTownInfo.map((item) => item.name);
  const sizes = sortedTownInfo.map((item) => item.mailboxSize);
  const template = `
  <p>우체통의 크기는 ${names.join(', ')}순입니다. 우체통 크기 순서: ${sizes.join(', ')}</p>
  `;

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
