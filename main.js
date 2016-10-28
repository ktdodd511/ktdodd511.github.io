var button = document.createElement("button");
button.innerHTML = "do something";

var body = document.getElementsByTagName('body')[0];
body.appendChild(button);

button.addEventListener("click",
  function() {alert("did something")});


function createBoxes() {
  // var cards = document.getElementById('game-board');

  for (i = 0; i < 4; i++) {
    var newDivs = document.createElement('div');
    document.getElementById('homework-links').appendChild(newDivs);
    newDivs.innerHTML = '<div class="boxes"></div>';

}
    createBoxes();