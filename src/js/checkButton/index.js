import { customQuerySelector } from "../utils/customQuerySelector.js";
import { customQuerySelectorAll } from "../utils/customQuerySelectorAll.js";

const checkButton = customQuerySelector("#check-btn");

checkButton.addEventListener("click", () => {
  renderVillageNamesContainingMailBox();
  // 우체통을 크기순으로 렌더링
});

function renderVillageNamesContainingMailBox() {
  const villageNames = findVillagesContainingMailBox();

  const villagesName = customQuerySelector("#villages-name");
  const villagesNumber = customQuerySelector("#villages-number");

  villagesName.textContent = `${villageNames.join()}`;
  villagesNumber.textContent = `총 ${villageNames.length}개의 마을입니다.`;
}

function findVillagesContainingMailBox() {
  const mailboxes = customQuerySelectorAll(".mailbox");
  return mailboxes.map((mailbox) =>
    mailbox.parentElement.parentElement.getAttribute("data-name")
  );
}
