var userResults = document.querySelector("#userResults");
var nameEl = document.querySelector("#nameEl");
var scoreEL = document.querySelector("#scoreEl");
var clear = document.querySelector("#clearBtn");
var goBack = document.querySelector("#backBtn");
var ul = document.querySelector("#list");
var scorelist = [];
var userscore = JSON.parse(window.localStorage.getItem("scores")) || [];

//Return to quizz home page
goBack.addEventListener("click", function () {
  window.history.back(1);
});

// itterating through the array to allow for check for multiple users
for (var i = 0; i < userscore.length; i++) {
  var scorelist = userscore[i];
  //creating a new item in a list
  var li = document.createElement("li");

  li.setAttribute("data-index", i);
  li.textContent = userscore[i].score + " " + userscore[i].userInitals;

  ul.appendChild(li);
}

//clears the local storage data.
clear.addEventListener("click", function () {
  window.localStorage.clear();
  window.location.reload();
});
