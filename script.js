var answer1 = document.querySelector("#ans_1");
var answer2 = document.querySelector("#ans_2");
var answer3 = document.querySelector("#ans_3");
var answer4 = document.querySelector("#ans_4");
var timerEl = document.querySelector("#timer");
var startQuizz = document.querySelector("#start");
var highscore = document.querySelector("#highscore");
var questionHolder = document.querySelector("#questions");
var answerHolder = document.querySelector("answers");
var highscore = [];
var timerCount = 10;

let i = 0;

const questionArray = [
  {
    question: "Commonly used data types DO NOT include:",

    answerChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if else statement is enclosed within ____.",
    answerChoice: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: 1,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answerChoice: [
      "1. numbers and strings",
      "2. other arrrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Strings values must be enclosed within ____ when being assigned to variables.",
    answerChoice: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses",
    ],
    correctAnswer: 2,
  },
  {
    question: "A very useful tool to debug arrays is",
    answerChoice: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: 3,
  },
];

function setQuizQuestions() {
  questionHolder.textContent = questionArray[i].question;
  answer1.textContent = questionArray[i].answerChoice[0];
  answer2.textContent = questionArray[i].answerChoice[1];
  answer3.textContent = questionArray[i].answerChoice[2];
  answer4.textContent = questionArray[i].answerChoice[3];
}

setQuizQuestions();

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

function checkAnswer() {}

answer1.addEventListener("click", function () {});
