var userResults = document.querySelector("#userResults");
var nameEl = document.querySelector("#nameEl");
var scoreEL = document.querySelector("#scoreEl");

var username = JSON.parse(localStorage.getItem("username"));
var userscore = localStorage.getItem("score");
console.log(username);
console.log(userscore);

userResults.textContent = ("User Name" + username, "Score " + userscore);

nameEl.textContent = username;
scoreEL.textContent = userscore;
