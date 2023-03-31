import { DomSelector } from './domAPI.js';

const makeVillage = (num) => {
    const domSelector = new DomSelector();
    const map = domSelector.selectClass('map');
    let countVillage = 1;

    while(countVillage <= num) {
        const div = document.createElement('div');
        div.classList.add('village');
        map.appendChild(div);
        countVillage++;
    }
}

const getRandomValueOfVillage = () => {
    const domSelector = new DomSelector();
    const villages = domSelector.selectClassAll('village');
    villages.forEach(setRandomSize);
    villages.forEach(setRandomPosition);
}

const setRandomSize = (element) => {
    const randomWidthSize = Math.floor(Math.random() * 200) + 50;
    const randomHeightSize = Math.floor(Math.random() * 200) + 50;
    element.style.width = `${randomWidthSize}px`;
    element.style.height = `${randomHeightSize}px`;
}

const setRandomPosition = (element) => {
    const domSelector = new DomSelector();
    const map = domSelector.selectClass('map');
    const randomPositionX = Math.floor(Math.random() * (map.offsetWidth - element.offsetWidth));
    const randomPositionY = Math.floor(Math.random() * (map.offsetHeight - element.offsetHeight));

    element.style.left = `${randomPositionX}px`;
    element.style.top = `${randomPositionY}px`;
}

const setVillageName = () => {
    const domSelector = new DomSelector();
    const villages = domSelector.selectClassAll('village');
    makeAlphabetName(villages);
}

const makeAlphabetName = (villages) => {
    let countVillage = 0;
    let nameCount = 65;
    while(countVillage < villages.length) {
        villages[countVillage].id = String.fromCharCode(nameCount);
        villages[countVillage].textContent = villages[countVillage].id;
        nameCount++
        countVillage++
    }
}

export { makeVillage, getRandomValueOfVillage, setVillageName }