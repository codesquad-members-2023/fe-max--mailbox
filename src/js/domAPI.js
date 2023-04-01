class DomSelector {
    constructor(root) {
        this.root = document.body;
    }

    selectId(idName) {
        const idList = [];

        const domSearch = (node) => {
            if(!node) {
                return;
            }

            if(node.id === idName) {
                return idList.push(node);
            }

            [...node.children].forEach((childNode) => {
                domSearch(childNode);
            });
        }

        domSearch(this.root);   
        return idList[0];
    }

    selectClassAll(className) {
        const classLists = [];

        const domSearch = (node) => {
            if(!node) {
                return;
            }

            if([...node.classList].includes(className)) {
                classLists.push(node)
            }

            [...node.children].forEach((childNode) => {
                domSearch(childNode);
            });
        }

        domSearch(this.root);
        return classLists;
    }

    selectClass(className) {
        return this.selectClassAll(className)[0];
    }
}

export { DomSelector };