var userResults = document.querySelector("#userResults");
var nameEl = document.querySelector("#nameEl");
var scoreEL = document.querySelector("#scoreEl");
var scorelist = [];

let userscore = JSON.parse(window.localStorage.getItem("scores") ?? "[]");

console.log(userscore);

// for (var i = 0; i < userscore.length; i++) {
//   var list = scorelist[i];

//   var li = document.createElement("li");
//   li.textContent = list;
//   li.setAttribute("data-index", i);

//   li.appendChild;
//   scoreEL.appendChild(li);
// }

scoreEL.textContent = JSON.stringify(userscore);
