var userResults = document.querySelector("#userResults");

var username = JSON.parse(localStorage.getItem("username"));
var userscore = localStorage.getItem("score");

userResults.textContent = ("User Name" + username, "Score " + userscore);
