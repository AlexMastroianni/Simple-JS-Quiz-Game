var answer1 = document.querySelector("#ans_1");
var answer2 = document.querySelector("#ans_2");
var answer3 = document.querySelector("#ans_3");
var answer4 = document.querySelector("#ans_4");
var timerEl = document.querySelector("#timer");
var startQuizz = document.querySelector("#start");
var highscore = document.querySelector("#highscore");
var questionHolder = document.querySelector("questions");
var answerHolder = document.querySelector("answers");
var timerCount = 10;

startQuizz.addEventListener("click", countdown);

function countdown() {
  var timer = setInterval(function () {
    timerCount--;
    timerEl.innerHTML = "time_remaining: " + timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

answer1.addEventListener("click", function () {
  console.log("answer 1");
});

answer2.addEventListener("click", function () {
  console.log("answer 2");
});
answer3.addEventListener("click", function () {
  console.log("answer 3");
});
answer4.addEventListener("click", function () {
  console.log("answer 4");
});
