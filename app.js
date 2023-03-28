const button = myQuerySelector('button');
button.addEventListener('click', () => {
	console.log('clicked!');
});

function myQuerySelector(selector) {
	const selectorName = selector.substr(1);
	if (selector.at(0) === '#') {
		return findNodeById(selectorName);
	} else if (selector.at(0) === '.') {
		return findNodeByClassName(selectorName);
	} else {
		return findNodeByTagName(selector);
	}
}

function myQuerySelectorAll(selector) {
	const selectorName = selector.substr(1);
	if (selector.at(0) === '#') {
		return [findNodeById(selectorName)];
	} else if (selector.at(0) === '.') {
		return findNodeByClassNameAll(selectorName);
	} else {
		return findNodeByTagNameAll(selector);
	}
}

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

function findNodeByTagNameAll(tag) {
	const DOMTree = walkPreOrder(document.body);
	const nodes = [];
	for (const node of DOMTree) {
		if (node.tagName === tag.toUpperCase()) {
			nodes.push(node);
		}
	}
	return nodes;
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

function findNodeByClassNameAll(className) {
	const DOMTree = walkPreOrder(document.body);
	const nodes = [];
	for (const node of DOMTree) {
		if (node.classList.contains(className)) {
			nodes.push(node);
		}
	}
	return nodes;
}
