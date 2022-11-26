# [React] My Todo List

행해99 주특기 입문 주차 과제
<br>
*예시 사이트 : http://todolistassignment.s3-website.ap-northeast-2.amazonaws.com/

## Constraints
1. 제목과 내용을 입력하고 [추가하기]버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
2. Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 해주세요.
3. Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. 컴포넌트 구조는 자유롭게 구현해보세요.

## Table of Contents
- [Components 구조](#Components구조)
- [UI 구성하기](#UI구성하기)
- [Todo 추가](#Todo추가)
- [Todo 삭제](#Todo삭제)
- [Todo 완료 상태변경 (완료 ↔ 진행중)](#Todo완료상태변경)

<hr>
<hr>

## Components구조
<b>Header / Todo 추가 / Todo List가 보여지는 부분으로 나눔</b>
![IMG_C1B3BC4D1950-1](https://user-images.githubusercontent.com/96729804/204071374-abf44555-c4b6-4401-9ad9-6f15b943dcb4.jpeg)

> Header① : 값이 변하지 않는 고정 부분이라 고유 컴포넌트로 분리함

> Todo 추가② : 새로운 todo-list를 추가하는 부분으로 추가 데이터만 전달하는 기능이기 때문에 데이터를 추가하는 부분의 컴포넌트로 분리함

> Todo List가 보여이는 부분③ - 모든 데이터를 받아서 핸드링 하는 부분으로 컴포넌트를 분리함

## UI구성하기
<b>Header / Todo 추가 / Todo List가 보여지는 부분으로 나눔 (Components구조 거의 유사)</b>

> flex : grid와 달리 고정되었는 부분은 flex를 사용

> grid : todo리스트들이 보여지는 곳에서 working / Done으로 구분하고 각각 안에서 카드들이 추가될 때 다시 grid로 Layout 구현

> 반응형 - Media Query


## Todo추가
<b>Todo-list추가하기 및 추가한 후에 빈 값 처리하기</b>

> App - AddContents 컴포넌트

> App - Contents 컴포넌트

AddContents 컴포넌트에서 추가하기 버튼을 누르면 title, contens의 value를 App 컴포넌트에서 prop로 전달받은 함수를 호출하면서 인수로 전달해주고
Add 컴포넌트에서는 전달받은 매개변수를 핸드링해서 다시 Contents 컴포넌트로 데이터를 전달함 


## Todo삭제




## Todo완료상태변경



