import { DomSelector } from './domAPI.js';

const makeMailbox = (village) => {
    const mailbox = document.createElement('span');
    const randomMailboxSize = Math.floor(Math.random() * 30) + 20;
    mailbox.classList.add('mailbox');
    mailbox.textContent = '📮';
    mailbox.style.fontSize = `${randomMailboxSize}px`;
    village.appendChild(mailbox);
}

const randomMailbox = () => {
    const domSelector = new DomSelector();
    const villages = domSelector.selectClassAll('village');
    const randomVillages = [];
    let villageCount = 0;
    
    while(villageCount < villages.length) {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if(randomNumber > 1) {
            randomVillages.push(villages[villageCount]);
        }
        villageCount++;
    }
    return randomVillages;
}

export { makeMailbox, randomMailbox }