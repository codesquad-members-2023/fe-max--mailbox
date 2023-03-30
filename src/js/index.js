import { renderVillageEls } from "./village/index.js";
import { customQuerySelector } from "./utils/customQuerySelector.js";
import { customQuerySelectorAll } from "./utils/customQuerySelectorAll.js";

renderVillageEls();

const button = document.querySelector("#check-btn");
button.addEventListener("click", () => {
  console.log(customQuerySelector("button"));
  console.log(customQuerySelectorAll(".mailbox"));
});
