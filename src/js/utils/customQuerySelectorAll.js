import { parseSelector } from "./customQuerySelector.js";

export function customQuerySelectorAll(selector) {
  const [selectorType, selectorName] = parseSelector(selector);
  const isTag = selectorType === "tag";
  const startEl = document.body;

  return isTag
    ? findAllByTagName(startEl, selectorName.toUpperCase(), [])
    : findAllByTypeAndName(startEl, selectorType, selectorName, []);
}

function findAllByTagName(currEl, targetName, els) {
  if (currEl.tagName === targetName) {
    els.push(currEl);
  }

  for (const child of currEl.children) {
    findAllByTagName(child, targetName, els);
  }

  return els;
}

function findAllByTypeAndName(currEl, targetType, targetName, els) {
  if (currEl.getAttribute(targetType) === targetName) {
    els.push(currEl);
  }

  for (const child of currEl.children) {
    findAllByTypeAndName(child, targetType, targetName, els);
  }

  return els;
}
