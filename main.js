const createTown = document.createElement("div");

document.addEventListener("click", (e) => {
  //   if (e.target.tagName === "button") {
  //   }
  //   traverse(document);
  console.log(document);
  console.log(typeof document);
  //   console.log(e.target.tagName);
});

document.addEventListener("DOMContentLoaded", () => {});

const a = `
    <div style="left: 100px; width: 100px; height: 100px"></div>
`;

function traverse(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.nodeName);
  }
  node = node.firstChild;
  while (node) {
    traverse(node);
    node = node.nextSibling;
  }
}
