import { renderVillageEls } from "./village/index.js";
import { customQuerySelector } from "./utils/customQuerySelector.js";

renderVillageEls();

const button = document.querySelector("#check-btn");
button.addEventListener("click", () => {
  console.log(customQuerySelector("button"));
});
