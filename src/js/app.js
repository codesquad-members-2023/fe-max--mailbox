import { DomSelector } from './domAPI.js';
import { renderVillages, renderMailbox } from './render.js';
import { onclickBtn, renderSearchResult, refreshPage } from './eventHandler.js';

const app = () => {
    renderVillages();
    renderMailbox();
}

const domSelector = new DomSelector();
const searchBtn = domSelector.selectClass('search-btn');
const refreshBtn = domSelector.selectClass('refresh-btn');
onclickBtn(searchBtn, renderSearchResult);
onclickBtn(refreshBtn, refreshPage);

app();