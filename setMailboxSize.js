const usedSize = new Map();

export const setMailboxSize = (village) => {
  village.forEach((el) => {
    while (el.hasMailbox) {
      const randomSize = Math.floor(Math.random() * 100) + 1;
      if (!usedSize.has(randomSize)) {
        el.setMailboxSize(randomSize);
        usedSize.set(randomSize, el.name);
        break;
      }
    }
    if (el.children) {
      setMailboxSize(el.children);
    }
  });

  return village;
};
