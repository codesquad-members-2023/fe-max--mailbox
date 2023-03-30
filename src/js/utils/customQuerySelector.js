export function customQuerySelector(selector) {
  const [selectorType, selectorName] = parseSelector(selector);
  const isTag = selectorType === "tag";
  const startEl = document.body;

  return isTag
    ? findByTagName(startEl, selectorName.toUpperCase())
    : findByTypeAndName(startEl, selectorType, selectorName);
}

function parseSelector(selector) {
  const type = getSelectorType(selector);
  const name = type === "tag" ? selector : selector.slice(1);
  return [type, name];
}

function getSelectorType(selector) {
  const selectorIdentifier = selector[0];
  switch (selectorIdentifier) {
    case ".":
      return "class";
    case "#":
      return "id";
    default:
      return "tag";
  }
}

function findByTagName(currEl, targetName) {
  if (currEl.tagName === targetName) return currEl;

  for (const child of currEl.children) {
    const res = findByTagName(child, targetName);
    if (res !== null) return res;
  }

  return null;
}

function findByTypeAndName(currEl, targetType, targetName) {
  if (currEl.getAttribute(targetType) === targetName) return currEl;

  for (const child of currEl.children) {
    const res = findByTypeAndName(child, targetType, targetName);
    if (res !== null) return res;
  }

  return null;
}
