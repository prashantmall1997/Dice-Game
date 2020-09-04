var random1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var random2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

document.querySelector('img.img1').setAttribute('src', "images/dice" + random1 + ".png");
document.querySelector('img.img2').setAttribute('src', "images/dice" + random2 + ".png");

if (random1 < random2) {
  document.querySelector('h1').innerText = "Player 2 Wins 🏁";
} else if (random1 > random2) {
  document.querySelector('h1').innerText = "Player 1 Wins 🏁";
} else {
  document.querySelector('h1').innerText = "Draw";
}
