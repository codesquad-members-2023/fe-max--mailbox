export const townNameMaker = {
  townNameStorage: [],

  makeName(village) {
    village.forEach((town) => {
      const townName = String.fromCharCode(this.townNameStorage.length + 65);
      this.townNameStorage.push(townName);
      town.setName(townName);

      if (town.children) {
        this.makeName(town.children);
      }
    });
  },
};

export const mailboxSizeMaker = {
  mailboxSizeStorage: new Map(),

  makeAllMailboxSize(village) {
    village.forEach((town) => {
      while (town.hasMailbox) {
        const randomSize = Math.floor(Math.random() * 100) + 1;
        if (!this.mailboxSizeStorage.has(randomSize)) {
          town.setMailboxSize(randomSize);
          this.mailboxSizeStorage.set(randomSize, town.name);
          break;
        }
      }
      if (town.children) {
        this.makeAllMailboxSize(town.children);
      }
    });
  },
};
