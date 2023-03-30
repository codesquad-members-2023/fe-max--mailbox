const app = () => {
    renderVillages();
}

const renderVillages = () => {
    const randomNumberOfVillage = Math.floor(Math.random() * 3) + 3;
    makeVillage(randomNumberOfVillage);
    getVillageSize();
}

const makeVillage = (num) => {
    const map = document.querySelector('.map');
    let countVillage = 1;

    while(countVillage <= num) {
        const div = document.createElement('div');
        div.classList.add('village');
        map.appendChild(div);
        countVillage++;
    }
}

const getVillageSize = () => {
    const villages = document.querySelectorAll('.village');
    villages.forEach(getRandomSize);
    villages.forEach(getRandomPosition);
}

const getRandomSize = (element) => {
    const randomWidthSize = Math.floor(Math.random() * 200) + 50;
    const randomHeightSize = Math.floor(Math.random() * 200) + 50;
    element.style.width = `${randomWidthSize}px`;
    element.style.height = `${randomHeightSize}px`;
}

const getRandomPosition = (element) => {
    const map = document.querySelector('.map');
    const randomPositionX = Math.floor(Math.random() * (map.offsetWidth - element.offsetWidth));
    const randomPositionY = Math.floor(Math.random() * (map.offsetHeight - element.offsetHeight));

    element.style.left = `${randomPositionX}px`;
    element.style.top = `${randomPositionY}px`;
}

app();