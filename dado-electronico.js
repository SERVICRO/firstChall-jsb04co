"use strict";

//let score = Math.ceil(Math.random() * 6);
//console.log(score);
let game = [];
let total = (accumulated, newScore) => {
  return accumulated + newScore;
};
let totalScore;

do {
  game.push(Math.ceil(Math.random() * 6));
  totalScore = game.reduce(total);
} while (totalScore < 50);
if ((totalScore = 50)) {
  alert("Has ganado");
} else {
  alert("Game Over, te pasate");
}
console.log(game);

console.log(totalScore);
