import { Village } from './village.js';
import { makeMailbox, findMailbox } from './mailbox.js';
import { myQuerySelector } from './domAPI.js';

function app() {
	window.addEventListener('load', init);
	const findMailboxBtn = myQuerySelector('.mailbox-btn');
	findMailboxBtn.addEventListener('click', findMailbox);
}

function init() {
	makeParentVillage('city');
	makeMailbox();
}

function makeParentVillage(parentId) {
	const maxVillageCount = Math.floor(Math.random() * 3) + 3;
	for (let villageCount = 0; villageCount < maxVillageCount; villageCount++) {
		const village = new Village(parentId);
		village.setRandomLocate();
		drawVillage(village);
		makeChildVillage(village.id);
	}
}

function makeChildVillage(villageId) {
	const parentVillage = myQuerySelector(`#${villageId}`);
	if (!parentVillage) {
		return;
	}
	if (parentVillage.width < 50 || parentVillage.height < 50) {
		return;
	}
	const randomCount = Math.floor(Math.random() * 3);
	for (let villageCount = 0; villageCount < randomCount; villageCount++) {
		const village = new Village(villageId);
		if (village.width < 50 || village.height < 50) {
			continue;
		}
		village.setRandomLocate();
		drawVillage(village);
		makeChildVillage(village.id);
	}
}

function drawVillage({ id, width, height, left, top, parentNode }) {
	const villageTemplate = `<div class='village' id='${id}' style='width:${width}px; height:${height}px; top:${top}px; left:${left}px;'>${id}</div>`;
	parentNode.insertAdjacentHTML('beforeend', villageTemplate);
}

app();
