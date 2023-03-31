import { myQuerySelector, myQuerySelectorAll } from './domAPI.js';

export function makeMailbox() {
	const allVillages = myQuerySelectorAll('.village');
	allVillages.forEach(makeRandomMailbox);
}

function makeRandomMailbox(village) {
	const diceNum = Math.floor(Math.random() * 4);
	if (diceNum === 0) {
		drawMailbox(village);
	}
	return;
}

function drawMailbox(village) {
	const mailboxTemplate = `<img class="mailbox" src="./icon/mailbox-icon.png" alt="mailbox">`;
	village.insertAdjacentHTML('beforeend', mailboxTemplate);
}

export function findMailbox() {
	const mailboxes = myQuerySelectorAll('.mailbox');
	const villageNames = [];
	mailboxes.forEach(mailbox => {
		villageNames.push(mailbox.parentElement.id);
	});
	printVillageName(villageNames);
}

function printVillageName(villageNames) {
	const textArea = myQuerySelector('.result-text-area');
	const resultTemplate = `<p>${villageNames}</br> 총 ${villageNames.length}개의 마을입니다.</p>`;
	textArea.insertAdjacentHTML('afterbegin', resultTemplate);
}
