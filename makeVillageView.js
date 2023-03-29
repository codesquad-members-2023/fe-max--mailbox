export const makeVillageView = (village, parent) => {
  const villageView = village.map(createTownNode);
  parent.append(...villageView);
};

const createTownNode = (town) => {
  const townNode = document.createElement('div');
  const { name, width, height, pointY, pointX, hasMailbox, children, mailboxSize } = town;

  townNode.classList.add('town', name);
  townNode.style.width = `${width}px`;
  townNode.style.height = `${height}px`;
  townNode.style.top = `${pointY}px`;
  townNode.style.left = `${pointX}px`;

  if (hasMailbox) {
    const mailbox = document.createElement('span');
    mailbox.classList.add('mailbox');
    mailbox.textContent = '📮';
    townNode.append(mailbox);
    mailbox.dataset['size'] = mailboxSize;
  }

  if (children) {
    makeVillageView(children, townNode);
  }

  return townNode;
};
