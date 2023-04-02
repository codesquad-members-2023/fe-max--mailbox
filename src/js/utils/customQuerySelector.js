export const customQuerySelectorAll = querySelectorFactory(true);
export const customQuerySelector = querySelectorFactory(false);

function querySelectorFactory(isAll) {
  return function (selector, startEl = document.body) {
    const [selectorType, selectorName] = parseSelector(selector);

    if (selectorType === null) throw new Error(`Invalid Selector: ${selector}`);

    const isTag = selectorType === "tag";

    if (isTag) {
      return isAll
        ? findAllByTagName(startEl, selectorName.toUpperCase())
        : findByTagName(startEl, selectorName.toUpperCase());
    } else {
      return isAll
        ? findAllByTypeAndName(startEl, selectorType, selectorName)
        : findByTypeAndName(startEl, selectorType, selectorName);
    }
  };
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
    case selectorIdentifier.match(/^[a-z]/)?.input:
      return "tag";
    default:
      return null;
  }
}

function findAllByTagName(currEl, targetName) {
  const els = [];

  if (currEl.tagName === targetName) {
    els.push(currEl);
  }

  for (const child of currEl.children) {
    els.push(...findAllByTagName(child, targetName));
  }

  return els;
}

function findAllByTypeAndName(currEl, targetType, targetName) {
  const els = [];

  if (currEl.getAttribute(targetType) === targetName) {
    els.push(currEl);
  }

  for (const child of currEl.children) {
    els.push(...findAllByTypeAndName(child, targetType, targetName));
  }

  return els;
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
