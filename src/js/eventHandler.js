import { DomSelector } from './domAPI.js';
import { quickSort } from './quickSort.js';

const onclickBtn = (btn, fun) => {
    btn.addEventListener('click', fun);
}

const renderSearchResult = () => {
    delay(2000).then(changeBorderColorOfVillage);
    searchMailboxes();
    sortMailboxes();
}

const refreshPage = () => {
    window.location.reload()
}

const searchMailboxes = () => {
    const domSelector = new DomSelector();
    const mailboxes = domSelector.selectClassAll('mailbox');
    const villageList = domSelector.selectClass('village-list');
    const villageWithMailbox = [];
    mailboxes.forEach(mailbox => {
        villageWithMailbox.push(mailbox.parentNode.id);
    });
    const numberOfMailbox = villageWithMailbox.length;
    villageList.textContent = 
    `${villageWithMailbox}
    총 ${numberOfMailbox}개의 마을입니다.
    `;
}

const sortMailboxes = () => {
    const domSelector = new DomSelector();
    const mailboxSizeInfo = domSelector.selectClass('mailbox-info');
    const mailboxes = domSelector.selectClassAll('mailbox');
    const sortResultOfMailboxSize = quickSort(mailboxes);
    const sortResultOfVillageName = [];

    sortResultOfMailboxSize.forEach(mailbox => sortResultOfVillageName.push(searchParentNodeId(mailbox)));
    if(!sortResultOfVillageName.length) {
        mailboxSizeInfo.textContent = `우체통이 있는 마을이 없습니다.`
    } else {
        mailboxSizeInfo.textContent = `우체통 크기는 ${sortResultOfVillageName} 순입니다.`
    }
}

const searchParentNodeId = (node) => {
    return node.parentNode.id;
}

const changeBorderColorOfVillage = () => {
    const domSelector = new DomSelector();
    const mailboxes = domSelector.selectClassAll('mailbox');
    const villageWithMailbox = [];
    mailboxes.forEach(mailbox => {
        villageWithMailbox.push(mailbox.parentNode);
    });
    villageWithMailbox.forEach(village => village.style.borderColor = 'red');
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { onclickBtn, renderSearchResult, refreshPage };