import { myQuerySelector, myQuerySelectorAll } from './app.js';

class Village {
	constructor(villageName, parentId) {
		this.id = villageName;
		this.parentNode = myQuerySelector(`#${parentId}`);
		this.width = this.getRandomWidth();
		this.height = this.getRandomHeight();
		this.top = 0;
		this.left = 0;
	}

	getRandomWidth() {
		const maxWidth = this.parentNode.offsetWidth * 0.6 > 80 ? this.parentNode.offsetWidth * 0.6 : 80;
		const minWidth = this.parentNode.offsetWidth * 0.2 < 50 ? 50 : this.parentNode.offsetWidth * 0.2;

		return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
	}

	getRandomHeight() {
		const maxHeight = this.parentNode.offsetHeight * 0.6;
		const minHeight = this.parentNode.offsetHeight * 0.2 < 50 ? 50 : this.parentNode.offsetHeight * 0.2;

		return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
	}

	setRandomLocate() {
		let randomTop = this.getRandomTop();
		let randomLeft = this.getRandomLeft();
		// 겹치치 않는 조건
		// 1) left < 부모의 width - width && top + height < 부모의 height
		// 2) b.left + b.width < a.left || b.left > a.left + a.width || b.top + b.height < a.top || b.top > a.top + a.height;
		this.top = randomTop;
		this.left = randomLeft;
	}

	getRandomTop() {
		return Math.floor(Math.random() * (this.parentNode.offsetHeight - this.height + 1));
	}

	getRandomLeft() {
		return Math.floor(Math.random() * (this.parentNode.offsetWidth - this.width + 1));
	}

	draw() {
		// 조건 확인해서 안 맞으면 다시 크기나 위치를 정해서 그리도록
		const villageTemplate = `<div class='village' id='${this.id}' style='width:${this.width}px; height:${this.height}px; top:${this.top}px; left:${this.left}px;'>${this.id}</div>`;
		this.parentNode.insertAdjacentHTML('beforeend', villageTemplate);
	}
}

const villageY = new Village('Y', 'city');
villageY.setRandomLocate();
villageY.draw();
const villageW = new Village('W', 'Y');
villageW.setRandomLocate();
villageW.draw();
const villageZ = new Village('Z', 'W');
villageZ.setRandomLocate();
villageZ.draw();
