# **📝 빨간 우체통 찾기**

키워드 : `DOM` `sort` `비동기` `정렬` `탐색`  
`Templating` `Node` `setTimeout` `Promise`

## **✅ 체크 리스트**

- [ ] html로 정적인 구조를 잡는다
- [ ] 정적인 구조에 간단한 css를 적용한다
- 로딩
  - [ ] 랜덤한 형태의 마을을 노출한다
  - [ ] 마을은 서로 위치가 겹치지 않는다
  - [ ] 마을의 갯수와 위치 모두 랜덤이다
  - [ ] 마을 안에 마을 역시 중첩 가능하다
  - [ ] 마을 안에 우체통이 있을 수도 없을 수도 있다
- 버튼 클릭
  - 1초 후
    - [ ] 우체통을 가진 마을의 정보를 알파벳 순서대로 노출한다
    - [ ] 우체통의 크기 순서대로 텍스트를 노출한다
  - 2초 후
    - [ ] 우체통을 가진 마을의 테두리가 빨간색으로 변경된다

## **➡️ 계획**

1. 생성될 마을과 우체통을 제외한 정적인 요소는 html로 직접 구현한다
2. css는 간단하게 위치, 크기와 색상 정도만 잡는다
3. 노드를 탐색하는 API를 만든다
4. 노드 탐색 API를 활용하여 마을을 생성하는 재귀함수를 구현한다
5. 노드 탐색 API를 활용하여 우체통이 들어있는 마을에 접근할 수 있는 함수를 구현한다

마을을 생성할 때 확인 되어야 하는 조건

1. 가장 작은 마을이 가장 큰 우체통의 크기보다 커야한다.
2. 마을은 자신의 부모 요소보다 작고 위치를 벗어나지 않아야 한다.(width + left , heigth + top)
3. 형제 마을이 존재 하는지 확인하고, 형제 마을을 침범하지 않아야 한다(형제 마을의 위치와 크기를 알아야함)
4. 위 조건을 모두 만족해야 한다

마을이 무한으로 생성되는 것을 막는 방법

1. 부모 요소에 패딩을 준다
2. 최소 크기를 정해준다
3. 우체통이 들어갈 위치는 비워둔다
4. 우체통은 50% 확률로 생성한다

기획서 예시

```html
<div>a</div>
<div>b   
  <div>c
    <div>d</div>
    <div>e</div>
  </div>
</div>
<div>f
  <div>g</div>
  <div>h
    <div>i
      <div>j</div>
    </div>
  </div>
</div>
<div>k
  <div>l</div>
</div>
```

노드 탐색 API

```
getBoundingClinetRect() : https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
elementFromPoint() : https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
MDN : https://developer.mozilla.org/en-US/docs/Web/API/Node
w3s : https://www.w3schools.com/js/js_htmldom_navigation.asp
dfs 블로그 : https://chamdom.blog/dfs-using-js/
dfs method 블로그 : https://dev.to/gregpetropoulos/traverse-the-dom-with-depth-first-search-recursion-3f79
dfs & bfs 블로그 : https://ryusm.tistory.com/48
queryselector 원리 : https://velog.io/@yeonbot/getElementById-querySelector%EA%B0%80-DOM-tree%EB%A5%BC-%EA%B2%80%EC%83%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
```

정렬 알고리즘

```
- 우체통이 있는 마을을 출력할 떄
'a' < 'b'는 true 가 나옴
유니코드 값을 비교하기 때문
이를 이용하여 정렬 알고리즘을 짜면 될듯

- 우체통의 크기 순으로 마을을 출력할 때
우체통의 크기 순으로 배열에 push후 join(",")으로 출력하면 될듯
```

비동기 setTimeout / Promise

```javascript
const delay = (time) => new Promise(resolve) => setTimeout(()=> resolve(),time)

//async와 await를 쓰면 됨
async function sayHi() {
  await delay (1000);
  console.log(hi);
}
```

## **📰 구현 사항 정리**

## **🔥 새롭게 배운 점 - 키워드 및 요약**

## **🤔 생각해볼 거리**




노드 탐색하는 API를 만든다.

마을 노드를 생성

1. 가장 큰 단위의 마을이 생성될 때는 부모노드가 마을지도인 섹션이니까
형제 마을이 같이 생기지 않게. 즉, 형제 마을이 생기는 조건은 부모 노드가
마을 노드일때만 가능하게한다.

2. 부모 마을 노드의 위치와 크기를 침범하지 않으면 생성한다.
  1. if 형제 마을이 생길 위치와 크기가 있으면 형제 마을 노드 생성가능.
  2. 먼저 생성된 형제 마을 노드의 위치와 크기를 침범하지 않으면 생성.
  3. 생성 가능한 여유공간이 우체통의 최대 크기 보다 작지않고, 먼저 생성된 형제 마을 노드의 위치를 침범하지 않으면 계속해서 생성한다.

* 각 마을 노드는 생성될 때 우체통 최소 크기~최대 크기 사이의 랜덤한 크기의 값을 가지고 생성된다.

빨간 우체통 확인 버튼을 클릭.

버튼을 클릭하면 1초뒤에 우체통 값을 가지고 있는 마을 노드의 이름값과 갯수 그리고 각 우체통의 크기 순서로 정렬해서 <p>태그에 있는 텍스트를 노출되게 한다.

2초뒤에 우체통이 있는 마을노드의 테두리를 빨간색으로 변경.