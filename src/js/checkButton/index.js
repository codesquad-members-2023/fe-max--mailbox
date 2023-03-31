import { customQuerySelector } from "../utils/customQuerySelector.js";
import { customQuerySelectorAll } from "../utils/customQuerySelectorAll.js";

const checkButton = customQuerySelector("#check-btn");

checkButton.addEventListener("click", () => {
  renderMailBoxVillageNames();
  // 우체통을 크기순으로 렌더링
});

function renderMailBoxVillageNames() {
  const villageNames = findMailboxVillageNames();

  const mailboxVillages = customQuerySelector("#mailbox-villages");

  mailboxVillages.innerHTML = `${villageNames.join()} <br/> 총 ${
    villageNames.length
  }개의 마을입니다.`;
}

function findMailboxVillageNames() {
  const mailboxes = customQuerySelectorAll(".mailbox");
  return mailboxes.map(
    (mailbox) => mailbox.parentElement.parentElement.dataset.name
  );
}
