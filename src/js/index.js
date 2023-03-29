const app = () => {
    printVillages();
}

const printVillages = () => {
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
}

const getRandomSize = (element) => {
    const randomSize = Math.floor(Math.random() * 300) + 100;
    element.style.width = `${randomSize}px`;
    element.style.height = `${randomSize}px`;
}

app();