//DFSPreOrder
export const domAPI = {
  nodeList: [],
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
        this.clearNodeList();
        return node;
      }
    }
    this.clearNodeList();
    return null;
  },

  getElementByTagName(tagName, parentNode = this.htmlNode) {
    const isButtonElement = (node) => {
      return node.nodeName === 'BUTTON';
    };
    const searchNodes = this.traverse(parentNode).filter(isButtonElement);
    this.clearNodeList();
    return searchNodes;
  },

  getAllElementsByClassName(className, parentNode = this.htmlNode) {
    const filterByClassName = (node) => {
      return node.classList.contains(className);
    };
    const searchNodes = this.traverse(parentNode).filter(filterByClassName);
    this.clearNodeList();
    return searchNodes;
  },

  getElementById(idName, parentNode) {},

  isElement(node) {
    return node.nodeType === 1;
  },

  // TODO: 인자로 필터링 조건 함수 받아서 콜백 실행
  traverse(parentNode = this.htmlNode) {
    if (!parentNode) {
      return;
    }

    domAPI.nodeList.push(parentNode);

    if (parentNode.children) {
      [...parentNode.children].forEach(domAPI.traverse);
    }

    return domAPI.nodeList;
  },

  clearNodeList() {
    this.nodeList = [];
  },
};
