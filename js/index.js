let content = "안녕하세요 개발자를 꿈꾸는 김영수 입니다";
const text = document.querySelector(".text");
let index = 0;
let count = 0;

function typing() {
  text.textContent += content[index++];
  if (index > content.length) {
    text.textContent = "";
    index = 0;
  }
  count++;
}

function insta() {
  content = "loading...";
  if ((text.textContent = "loading...")) {
    index = 22;
    content = "인스타그램으로 이동합니다...";
    setInterval(typing, 1500);
  }
}

function insta() {
  content = "loading...";
  if ((text.textContent = "loading...")) {
    index = 22;
    content = "인스타그램으로 이동합니다...";
  }
}

function github() {
  content = "loading...";
  if ((text.textContent = "loading...")) {
    index = 22;
    content = "깃허브로 이동합니다...";
  }
}

function out() {
  content = "loading...";
  if ((text.textContent = "loading...")) {
    index = 22;
    content = "안녕하세요 개발자를 꿈꾸는 김영수 입니다";
  }
}

setInterval(typing, 100);
