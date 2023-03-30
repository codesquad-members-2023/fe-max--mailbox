class Town {
    static townCount = 0;
    constructor(outer) {
        // this.outer = outer;
        this.name = String.fromCharCode(65 + Town.townCount);
        this.width = `${this.randomLength(outer.offsetWidth)}px`;
        this.height = `${this.randomLength(outer.offsetHeight)}px`;
        this.left = `${this.randomPoint(outer.offsetWidth)}px`;
        this.top = `${this.randomPoint(outer.offsetHeight)}px`;
        this.inner = document.createElement("div");
        
    }

    randomPoint(outerLength) {
        const centerPoint = outerLength / 2;
        return Math.floor(Math.random() * centerPoint);
    }

    randomLength(outerLength) {
        const minLength = 100;
        const maxLength = outerLength / 2 - minLength;
        return Math.floor(Math.random() * maxLength) + minLength;
    }

    appendInnerTown(outer) {
        this.inner.textContent = this.name;
        this.inner.style.left = this.left;
        this.inner.style.top = this.top;
        this.inner.style.width = this.width;
        this.inner.style.height = this.height;
        outer.appendChild(this.inner);
    }
}

function createLoopTown(outer) {
    const townMap = document.querySelector(".town-map");
    outer = townMap;
    const maxDepth = 3;
    let currentDepth = 1;
    while (currentDepth <= maxDepth) {
        const newTown = new Town(outer);
        const currentX = parseInt(newTown.left) + parseInt(newTown.width);
        const currentY = parseInt(newTown.top) + parseInt(newTown.height);
        const outerX = outer.offsetWidth;
        const outerY = outer.offsetHeight;
        const isNotOverlap = currentX < outerX && currentY < outerY;
        if (isNotOverlap) {
            newTown.appendInnerTown(outer);
            outer = newTown.inner;
            Town.townCount++;
            currentDepth++;
        } else {
            currentDepth++;
        }
    }
}

createLoopTown();
createLoopTown();
createLoopTown();

// console.log(townMap.getBoundingClientRect());

// outer의 width 및 heigth가 inner의 최소 width 및 height보다 작으면 inner가 생성되지 않게 해야 함
// Math.round(Math.random())을 사용해 0 또는 1의 블리언 데이터로 우체통이 생성되거나 안되게 할까?

// 작게 나눠서 구현하기
// 자식을 가질 최소 크기
// 노드 탐색 API를 활용할 곳 -> 마을을 중첩하여 만들 때, depth가 1인 형제 마을의 위치와 크기정보를 가져올 때 사용 가능 할 듯

// 변수와 메소드를 서로 연관되어 있는 기능 별로 그루핑하는 기능

// getBoundingClientRect()로
// currentTown과 parentTown을 나누기

//domContentLoaded 하면 마을 만드는 함수 실행
