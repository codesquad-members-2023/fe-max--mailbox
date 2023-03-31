import { customQuerySelector } from "../utils/customQuerySelector.js";
import { customQuerySelectorAll } from "../utils/customQuerySelectorAll.js";
import { mergeSort } from "../utils/mergeSort.js";

const checkButton = customQuerySelector("#check-btn");

checkButton.addEventListener("click", () => {
  const mailboxVillagesData = findMailboxVillagesData();
  const villageNames = mailboxVillagesData.map((village) => village.name);

  renderMailBoxVillageNames(villageNames);
  renderSortedVillageNamesBySize(mailboxVillagesData);
});

function renderMailBoxVillageNames(villageNames) {
  const mailboxVillagesEl = customQuerySelector("#mailbox-villages");

  mailboxVillagesEl.innerHTML = `
    ${villageNames.join(", ")} <br/> 총 ${villageNames.length}개의 마을입니다.
  `;
}

function findMailboxVillagesData() {
  const mailboxes = customQuerySelectorAll(".mailbox");
  return mailboxes.map((mailbox) => {
    const { name, size } = mailbox.parentElement.parentElement.dataset;
    return { name, size };
  });
}

function renderSortedVillageNamesBySize(mailboxVillagesData) {
  const sortedVillagesEl = customQuerySelector("#sorted-villages");

  const sortedVillageNames = mergeSort(mailboxVillagesData).map(
    (village) => village.name
  );

  sortedVillagesEl.innerHTML = `
    우체통 크기는 <br/>
    ${sortedVillageNames.join(", ")}
    순입니다.
  `;
}
