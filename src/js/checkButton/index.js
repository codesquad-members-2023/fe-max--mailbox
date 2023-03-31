import {
  customQuerySelector,
  customQuerySelectorAll,
} from "../utils/customQuerySelector.js";
import { customMergeSort } from "../utils/customMergeSort.js";
import { delayedCallback } from "../utils/index.js";

const checkButton = customQuerySelector("#check-btn");

checkButton.addEventListener("click", async () => {
  const mailboxVillageEls = findMailboxVillageEls();
  const mailboxVillagesData = mailboxVillageEls.map((village) => {
    return { name: village.dataset.name, size: village.dataset.size };
  });
  const villageNames = mailboxVillagesData.map((village) => village.name);

  renderMailboxVillageNames(villageNames);
  renderSortedVillageNamesBySize(mailboxVillagesData);

  await delayedCallback(
    () => highlightMailboxVillages(mailboxVillageEls),
    2000
  );
});

function renderMailboxVillageNames(villageNames) {
  const mailboxVillagesEl = customQuerySelector("#mailbox-villages");

  mailboxVillagesEl.innerHTML = `
    ${villageNames.join(", ")} <br/> 총 ${villageNames.length}개의 마을입니다.
  `;
}

function findMailboxVillageEls() {
  const mailboxes = customQuerySelectorAll(".mailbox");
  return mailboxes.map((mailbox) => {
    return mailbox.parentElement.parentElement;
  });
}

function renderSortedVillageNamesBySize(mailboxVillagesData) {
  const sortedVillagesEl = customQuerySelector("#sorted-villages");

  const sortedVillageNames = customMergeSort(mailboxVillagesData).map(
    (village) => village.name
  );

  sortedVillagesEl.innerHTML = `
    우체통 크기는 <br/>
    ${sortedVillageNames.join(", ")}
    순입니다.
  `;
}

function highlightMailboxVillages(mailboxVillages) {
  mailboxVillages.forEach((mailboxVillage) => {
    mailboxVillage.classList.add("highlight");
  });
}
