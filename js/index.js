let content = "안녕하세요 개발자를 꿈꾸는 김영수 입니다"; // default content
const text = document.querySelector(".text"); // 클래스 값이 text인 요소에 접근
let index = 0; // 값이 변해야 하므로 const 대신 let

function typing() {
  // 타이핑 함수
  text.textContent += content[index++]; // text 클래스안 textContent에 값 하나씩 추가
  if (index > content.length) {
    // index 값이 content 값 길이보다 길어지면 textContent 초기화, index값 초기화
    text.textContent = "";
    index = 0;
  }
}

function insta() {
  // 인스타그램 아이콘에 마우스를 갖다 댈시 content 내용 변경
  text.textContent = "loading..."; // 변할 때 개연성을 위하여 loading.. 추가
  index = 22; // 원래 content 내용이 입력하다 도중에 입력되는거 방지 (22인 이유 : 기본 default 값의 길이가 22)
  content = "인스타그램으로 이동합니다...";
}

function github() {
  text.textContent = "loading...";
  index = 22;
  content = "깃허브로 이동합니다...";
}

function out() {
  text.textContent = "loading...";
  index = 22;
  content = "안녕하세요 개발자를 꿈꾸는 김영수 입니다";
}

setInterval(typing, 100); // 100ms 마다 typing 함수 무한 실행
