import { Village } from './village.js';
import { myQuerySelector, myQuerySelectorAll } from './domAPI.js';

function app() {
	window.addEventListener('load', makeVillage);
}

function makeVillage() {
	const maxVillageCount = Math.floor(Math.random() * 3) + 3;
	let villageCount = 0;
	while (villageCount < maxVillageCount) {
		const village = new Village('city');
		village.setRandomLocate();
		drawVillage(village);
		villageCount++;
		makeVillageInVillage(village.id);
	}
}

function makeVillageInVillage(villageId) {
	if (!myQuerySelector(`#${villageId}`)) {
		return;
	}
	const maxCount = Math.floor(Math.random() * 3);
	let count = 0;
	while (count < maxCount) {
		const village = new Village(villageId);
		count++;
		if (village.width < 50 || village.height < 50) {
			continue;
		}
		village.setRandomLocate();
		drawVillage(village);
		makeVillageInVillageInVillage(village.id);
	}
}

function makeVillageInVillageInVillage(villageId) {
	if (!myQuerySelector(`#${villageId}`)) {
		return;
	}
	const maxCount1 = Math.floor(Math.random() * 3);
	let count1 = 0;
	while (count1 < maxCount1) {
		const village = new Village(villageId);
		count1++;
		if (village.width < 50 || village.height < 50) {
			continue;
		}
		village.setRandomLocate();
		drawVillage(village);
	}
}

function drawVillage({ id, width, height, left, top, parentNode }) {
	// 조건 확인해서 안 맞으면 다시 크기나 위치를 정해서 그리도록
	const villageTemplate = `<div class='village' id='${id}' style='width:${width}px; height:${height}px; top:${top}px; left:${left}px;'>${id}</div>`;
	parentNode.insertAdjacentHTML('beforeend', villageTemplate);
}

app();
