export const mergeSortMailboxTown = (mailboxTown) => {
  if (mailboxTown.length <= 1) {
    return mailboxTown;
  }

  const middleIndex = Math.floor(mailboxTown.length / 2);
  const leftSide = mergeSortMailboxTown(mailboxTown.slice(0, middleIndex));
  const rightSide = mergeSortMailboxTown(mailboxTown.slice(middleIndex));

  return mergeMailboxTown(leftSide, rightSide);
};

const mergeMailboxTown = (townListA, townListB) => {
  const result = [];
  let pointerA = 0;
  let pointerB = 0;

  const insertNodeA = () => {
    result.push(townListA[pointerA]);
    pointerA++;
  };

  const insertNodeB = () => {
    result.push(townListB[pointerB]);
    pointerB++;
  };

  while (pointerA < townListA.length && pointerB < townListB.length) {
    if (Number(townListB[pointerB].mailboxSize) > Number(townListA[pointerA].mailboxSize)) {
      insertNodeB();
    } else {
      insertNodeA();
    }
  }

  while (pointerA < townListA.length) {
    insertNodeA();
  }

  while (pointerB < townListB.length) {
    insertNodeB();
  }

  return result;
};
