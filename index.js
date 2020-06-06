const CONTAINER = document.querySelector(".container");
const HIDE = "hide";
const SHOW = "show";
const MYCHOICE = document.querySelector(".winGame"),
  myRock = document.querySelector(".drawRock"),
  myScissors = document.querySelector(".drawScissors"),
  myPaper = document.querySelector(".drawPaper");
const REFRESH_BTN = document.querySelector("button");


//초기값 다 안보임
myRock.classList.add("hide");
myScissors.classList.add("hide");
myPaper.classList.add("hide");
REFRESH_BTN.classList.add(HIDE);

//드로우 내가 내는 거 ㅎㅎ
function drawPaper() {
  myPaper.classList.remove("hide");
}
function drawRock() {
  myRock.classList.remove("hide");
}
function drawScissors() {
  myScissors.classList.remove("hide");
}

// 라디오 선택하면 디스플레이 넌
function handleSHOWING() {
  CONTAINER.classList.add(HIDE);
  REFRESH_BTN.classList.remove(HIDE);
  document.querySelector("h2").classList.add(HIDE);
  if (
    document.querySelector(".container input[value = rock]").checked === true
  ) {
    drawPaper();
    
    
  } else if (
    document.querySelector(".container input[value = scissors]").checked ===
    true
  ) {
    drawRock();
  } else {
    drawScissors();
  }
}

function init() {
  addEventListener("change", handleSHOWING);
}
init();
