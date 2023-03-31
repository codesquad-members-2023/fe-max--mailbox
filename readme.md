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

- 마을을 생성할 때 확인 되어야 하는 조건

1. 가장 작은 마을이 가장 큰 우체통의 크기보다 커야한다.
2. 마을은 자신의 부모 요소보다 작고 위치를 벗어나지 않아야 한다.(width + left , heigth + top)
3. 형제 마을이 존재 하는지 확인하고, 형제 마을을 침범하지 않아야 한다(형제 마을의 위치와 크기를 알아야함)
4. 위 조건을 모두 만족해야 한다

- 마을이 무한으로 생성되는 것을 막는 방법

1. ~~부모 요소에 패딩을 준다~~
2. 최소 크기를 정해준다
3. 우체통이 들어갈 위치는 비워둔다
4. 우체통은 50% 확률로 생성한다

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

- 비동기 setTimeout / Promise

```javascript
const delay = (time) => new Promise(resolve) => setTimeout(()=> resolve(),time)

//async와 await를 쓰면 됨
async function sayHi() {
  await delay (1000);
  console.log(hi);
}
```

## **📰 구현 사항 정리**

## **🔥 페어 프로그래밍 요약**

- 1일차 월
  - 오전 : 미션 확인 및 그룹 리뷰
  - 오후 : 크롱의 미션 소개
  - 이후 : 페어 프로그램 방향 설정, html 구조 잡기, css 간단 작업, js 맛보기
- 2일차 화
  - 오전 : 그룹 리뷰 및 js 방향 잡기
  - 오후 : 본격적인 js 구현 시도 -> 실패
    - 구현 실패 원인 분석
      ```markdown
      - 구현할 때 여러 기능을 한번에 넣으려고 함
      - driver와 navigator의 역할 분담 실패
        - 각자 driver의 역할을 맡을 때 너무 수동적으로 임함 -> navigator의 부담 증가
      ```
- 3일차 수
  - 오전
    - 그룹 리뷰
    - 미션 해결을 위한 개인 공부
    - 페어 프로그램의 방향 재설정
    - 각자 구상한 구현 방식이 다름 -> 의견 조율 실패
  - 오후 : namse의 마스터 클래스
  - 이후 : 각자 생각한 구현 방식에 대해 설득력을 갖추기 위한 개인 학습
  - 의견 조율이 실패한 이유
    ```markdown
    - 의견을 나눌 시간 부족
    - 미션 구현을 위해 의견을 나눴지만, 서로 구체적인 계획은 없었음
    - toko : 현재 상황에 맞추어 미션의 내용을 축소 및 변경하자
    - bakha : 미션의 핵심(노드 탐색, 재귀를 통한 함수 반복)만큼은 해치지 말고 최대한 구현 시도를 하자
    ```
  - 만약 시간이 충분했음에도 의견이 실패할 경우에는..?
    ``` markdown
    - 누구의 방식이 옳거나 그른 것은 없다
    - 나의 방식을 마냥 고집하지말자
    - 각자의 의견을 잘 취합하여 프로젝트가 더 나은 방향으로 가려는 방식을 채택해야 한다
    - 상대방의 방식을 존중하며 경청한다
    - 나의 방식을 상대방에게 잘 전달하여 설득할 수 있는 능력을 길러야 한다
    ```
- 4일차 목
  - 오전
    - 그룹 리뷰
    - 구현 방식에 대한 토론 -> 합의
  - 오후 
    - 페어 & 페어 리뷰
    - js 작업
  - 이후
    - 잔업
- 5일차 금
  - 오전
    - 그룹 리뷰

## **🤔 생각해볼 거리**
