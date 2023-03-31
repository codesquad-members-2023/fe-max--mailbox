import { myQuerySelectorAll } from './domAPI.js';

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
