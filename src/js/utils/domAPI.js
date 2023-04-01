export const domAPI = {
  htmlNode: document.firstElementChild,

  querySelector(selector, parentNode = this.htmlNode) {
    if (typeof selector !== 'string') {
      throw new Error('선택자는 문자열 타입만 가능합니다.');
    }

    if (selector[0] === '.') {
      const className = selector.slice(1);
      return this.getElementByclassName(className, parentNode);
    }

    if (selector[0] === '#') {
      const idName = selector.slice(1);
      return this.getElementById(idName, parentNode);
    }
  },

  getElementByclassName(className, parentNode = this.htmlNode) {
    for (const node of this.traverse(parentNode)) {
      if (node.classList.contains(className)) {
        return node;
      }
    }
    return null;
  },

  getElementByTagName(tagName, parentNode = this.htmlNode) {
    const isTagNameElement = (node) => {
      return node.nodeName === tagName.toUpperCase();
    };

    const searchNodes = this.traverse(parentNode, isTagNameElement);
    return searchNodes;
  },

  getAllElementsByClassName(className, parentNode = this.htmlNode) {
    const filterByClassName = (node) => {
      return node.classList.contains(className);
    };
    const searchNodes = this.traverse(parentNode, filterByClassName);

    return searchNodes;
  },

  getElementById(idName, parentNode) {},

  traverse(parentNode = this.htmlNode, isMatchingNode) {
    const nodeList = [];

    if (!parentNode) {
      return [];
    }

    nodeList.push(parentNode);

    if (parentNode.children) {
      Array.from(parentNode.children).forEach((childNode) => {
        nodeList.push(...domAPI.traverse(childNode));
      });
    }

    if (!isMatchingNode) {
      return nodeList;
    }

    return nodeList.filter(isMatchingNode);
  },
};
