const createTown = document.createElement("div");

document.addEventListener("click", (e) => {
  
});

document.addEventListener("DOMContentLoaded", () => {

});

let townNum = 1;

function makeTown(outer) {
  
  const randomNum = Math.floor(Math.random() * (outer.offsetWidth / 4 + 1)) + 100;
  let x = Math.floor(Math.random() * outer.offsetWidth * (3 / 4));
  let y = Math.floor(Math.random() * outer.offsetHeight * (3 / 4));


  return `
  <div 
    class="town" 
    id="a"
    style="position:absolu; 
    top:${y}px;
    left:${x}px;
    width:${randomNum}px;
    height:${randomNum}px;">
    ${townNum}
  </div>
  `
}

const map = mySelector(".map")

map.insertAdjacentHTML("afterbegin" ,makeTown(map))

function* walkPreOrder(node){
  if(!node) return

  // do something here
  yield node
  for(let child of node.children){
    yield* walkPreOrder(child)
  }
}


function mySelector(selector){
  const path = selector.split(' ').map(str => str.trim())

  let currentNode = document.body
  while(path.length && currentNode){

    const currentSelector = path.shift()
    let found = false

    for(let node of walkPreOrder(currentNode)){
      if(node.matches(currentSelector)){
        currentNode = node
        found = true
        break
      }
    }

    if(!found) currentNode = null
  }
  return currentNode
}






// body 요소의 위치를 랜덤한 값으로 설정합니다.

// document.body.style.left = x + "px";
// document.body.style.top = y + "px";






// const item = document.querySelector('.item');
// const container = document.querySelector('.container');
// const containerRect = container.getBoundingClientRect();

// const x = Math.random() * containerRect.width;
// const y = Math.random() * containerRect.height;
// const signX = Math.random() < 0.5 ? -1 : 1;
// const signY = Math.random() < 0.5 ? -1 : 1;

// item.style.left = x * signX + 'px';
// item.style.top = y * signY + 'px';













const a = `
    <div style="left: 100px; width: 100px; height: 100px"></div>
`;

function traverse(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.nodeName);
  }
  node = node.firstChild;
  while (node) {
    traverse(node);
    node = node.nextSibling;
  }
}

// 하위 노드를 통한 재귀
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}

