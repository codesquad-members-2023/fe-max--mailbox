import { initClickEvent } from "./buttonClickHandler.js";

class Town {
    static townCount = 0;
    constructor(parent) {
        this.name = String.fromCharCode(65 + Town.townCount);
        this.width = this.setRandomSize(parent.offsetWidth);
        this.height = this.setRandomSize(parent.offsetHeight);
        this.left = this.setRandomCoordinate(parent.offsetWidth);
        this.top = this.setRandomCoordinate(parent.offsetHeight);
        this.child = document.createElement("div");
    }

    setRandomSize(parentSize) {
        const minSize = 100;
        const maxSize = parentSize / 2 - minSize;
        return Math.floor(Math.random() * maxSize) + minSize;
    }

    setRandomCoordinate(parentSize) {
        const centerPoint = parentSize / 2;
        return Math.floor(Math.random() * centerPoint);
    }

    setChildStyle() {
        this.child.textContent = this.name;
        this.child.style.left = this.left + "px";
        this.child.style.top = this.top + "px";
        this.child.style.width = this.width + "px";
        this.child.style.height = this.height + "px";
        this.child.classList.add("town");
        this.child.className = "town";
    }

    appendChildTown(parent) {
        parent.appendChild(this.child);
    }
}

function checkInside(parent, child) {
    const childX = parseInt(child.left) + parseInt(child.width);
    const childY = parseInt(child.top) + parseInt(child.height);
    const parentX = parent.offsetWidth;
    const parentY = parent.offsetHeight;
    return childX < parentX && childY < parentY;
}

function isOverlapWithPreTowns(towns, town) {
    return towns.some((prevTown) => isOverlap(prevTown, town));
}

function createNestedTown() {
    const townMap = document.querySelector(".town-map");
    let parent = townMap;
    const maxDepth = 10;
    let currentDepth = 1;
    while (currentDepth <= maxDepth) {
        const newTown = new Town(parent);
        const towns = document.querySelectorAll(".town-map > div");
        const prevTowns = [];

        for (let town of towns) {
            prevTowns.push(town);
        }

        if (towns.length) {
            if (isOverlapWithPreTowns(prevTowns, newTown)) {
                currentDepth++;
            } else {
                const isInside = checkInside(parent, newTown);
                if (isInside) {
                    newTown.setChildStyle(parent);
                    newTown.appendChildTown(parent);
                    parent = newTown.child;
                    Town.townCount++;
                    currentDepth++;
                } else {
                    currentDepth++;
                }
            }
        } else {
            const isInside = checkInside(parent, newTown);
            if (isInside) {
                newTown.setChildStyle(parent);
                newTown.appendChildTown(parent);
                parent = newTown.child;
                Town.townCount++;
                currentDepth++;
            } else {
                currentDepth++;
            }
        }
    }
}

function isOverlap(prevTown, currentTown) {
    const prevTownInfo = getElementCoordinate(prevTown);
    const currentTownInfo = getObjectCoordinate(currentTown);
    if (
        prevTownInfo.right < currentTownInfo.left ||
        currentTownInfo.right < prevTownInfo.left ||
        prevTownInfo.bottom < currentTownInfo.top ||
        currentTownInfo.bottom < prevTownInfo.top
    ) {
        return false;
    } else {
        return true;
    }
}

function getElementCoordinate(town) {
    const left = town.offsetLeft;
    const right = town.offsetLeft + town.offsetWidth;
    const top = town.offsetTop;
    const bottom = town.offsetTop + town.offsetHeight;
    return { left, right, top, bottom };
}

function getObjectCoordinate(town) {
    const left = town.left;
    const right = town.left + town.width;
    const top = town.top;
    const bottom = town.top + town.height;
    return { left, right, top, bottom };
}

function mailbox(createdTowns) {
    for (const town of createdTowns) {
        if(Math.round(Math.random())) {
            town.classList.add('mail-box');
            const townWidth = town.offsetWidth;
            const townHeight = town.offsetHeight;
            town.id = townWidth * townHeight;
        }
    }
}

function fn() {
    createNestedTown();
    createNestedTown();
    createNestedTown();
    createNestedTown();
    createNestedTown();
    const createdTowns = document.querySelectorAll(".town")
    mailbox(createdTowns);
}

fn();

initClickEvent();

// outer의 width 및 height가 inner의 최소 width 및 height보다 작으면 inner가 생성되지 않게 해야 함
// Math.round(Math.random())을 사용해 0 또는 1의 블리언 데이터로 우체통이 생성되거나 안되게 할까?

// 작게 나눠서 구현하기
// 자식을 가질 최소 크기
// 노드 탐색 API를 활용할 곳 -> 마을을 중첩하여 만들 때, depth가 1인 형제 마을의 위치와 크기정보를 가져올 때 사용 가능 할 듯

// 변수와 메소드를 서로 연관되어 있는 기능 별로 그루핑하는 기능

// getBoundingClientRect()로
// currentTown과 parentTown을 나누기

//domContentLoaded 하면 마을 만드는 함수 실행
