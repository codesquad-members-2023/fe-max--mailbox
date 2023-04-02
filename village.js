import { myQuerySelector, myQuerySelectorAll } from './domAPI.js';

export class Village {
	static count = 65;
	constructor(parentId) {
		this.id = this.getRandomName();
		this.parentNode = myQuerySelector(`#${parentId}`);
		this.width = this.getRandomWidth();
		this.height = this.getRandomHeight();
		this.top = 0;
		this.left = 0;
	}

	getRandomName() {
		const alphabet = String.fromCharCode(Village.count);
		Village.count++;
		return alphabet;
	}

	getRandomWidth() {
		const maxWidth = this.parentNode.offsetWidth * 0.5;
		const minWidth = this.parentNode.offsetWidth * 0.2;

		return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
	}

	getRandomHeight() {
		const maxHeight = this.parentNode.offsetHeight * 0.5;
		const minHeight = this.parentNode.offsetHeight * 0.2;

		return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
	}

	setRandomLocate() {
		this.top = this.getRandomTop();
		this.left = this.getRandomLeft();

		const neighborVillages = Array.from(this.parentNode.children);
		const isVillageLocationNotOverLap = neighborVillages.every(this.isNotOverLap, this);

		if (neighborVillages.length === 0) {
			return;
		}
		if (isVillageLocationNotOverLap) {
			return;
		}

		this.width = this.getRandomWidth();
		this.height = this.getRandomHeight();
		this.setRandomLocate();
	}

	isNotOverLap(ref) {
		return (
			this.left + this.width < ref.offsetLeft ||
			this.left > ref.offsetLeft + ref.offsetWidth ||
			this.top + this.height < ref.offsetTop ||
			this.top > ref.offsetTop + ref.offsetHeight
		);
	}

	getRandomTop() {
		return Math.floor(Math.random() * (this.parentNode.offsetHeight - this.height + 1)) - 3;
	}

	getRandomLeft() {
		return Math.floor(Math.random() * (this.parentNode.offsetWidth - this.width + 1)) - 3;
	}
}
