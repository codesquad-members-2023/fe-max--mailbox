// function myQuerySelector() {

// }

function walkPreOrder(node, nodes = []) {
  if (!node) return nodes;

  nodes.push(node);
  for (const child of node.children) {
    walkPreOrder(child, nodes);
  }
  return nodes;
}

function findNodeById(nodeId) {
  const DOMTree = walkPreOrder(document.body);
  for (const node of DOMTree) {
    if (node.id === nodeId) {
      return node;
    }
  }
  return null;
}

function findNodeByTagName(tag) {
  const DOMTree = walkPreOrder(document.body);
  for (const node of DOMTree) {
    if (node.tagName === tag.toUpperCase()) {
      return node;
    }
  }
  return null;
}

function findNodeByClassName(className) {
  const DOMTree = walkPreOrder(document.body);
  for (const node of DOMTree) {
    if (node.classList.contains(className)) {
      return node;
    }
  }
  return null;
}
