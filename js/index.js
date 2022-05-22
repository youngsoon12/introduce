const content = "안녕하세요 개발자를 꿈꾸는 김영수 입니다";
const text = document.querySelector(".text");
let index = 0;

function typing() {
  text.textContent += content[index++];
  if (index > content.length) {
    text.textContent = "";
    index = 0;
  }
}

setInterval(typing, 200);
