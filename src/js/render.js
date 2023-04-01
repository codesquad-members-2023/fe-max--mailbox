import { makeVillage, getRandomValueOfVillage, setVillageName } from './villages.js';
import { makeMailbox, randomMailbox } from './mailbox.js';

const renderVillages = () => {
    const randomNumberOfVillage = Math.floor(Math.random() * 3) + 3;
    makeVillage(randomNumberOfVillage);
    getRandomValueOfVillage();
    setVillageName();
}

const renderMailbox = () => {
    const randomVillages = randomMailbox();

    randomVillages.forEach(village => makeMailbox(village));
}

export { renderVillages, renderMailbox }