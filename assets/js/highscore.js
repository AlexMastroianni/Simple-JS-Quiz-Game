var userResults = document.querySelector("#userResults");
var nameEl = document.querySelector("#nameEl");
var scoreEL = document.querySelector("#scoreEl");
var clear = document.querySelector("#clearBtn");
var goBack = document.querySelector("#backBtn");
var ul = document.querySelector("#list");
var scorelist = [];
var userscore = JSON.parse(window.localStorage.getItem("scores")) || [];

goBack.addEventListener("click", function () {
  window.history.back(1);
});

console.log(userscore.length);

for (var i = 0; i < userscore.length; i++) {
  var scorelist = userscore[i];
  var li = document.createElement("li");

  li.textContent = scorelist;
  li.setAttribute("data-index", i);

  li.textContent = userscore[i].score + " " + userscore[i].userInitals;

  ul.appendChild(li);
}

clear.addEventListener("click", function () {
  window.localStorage.clear();
  window.location.reload();
});
