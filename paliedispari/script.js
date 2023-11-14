"use strict";

const playerChoice = prompt("scegli fra pari o dispari");

let computerChoice = "";

function computerNumber() {
  const computerRandom = Math.floor(Math.random() * 5 + 1);
  return computerRandom;
}
console.log(computerNumber);

if (playerChoice === "pari") {
  computerChoice = "dispari";
  console.log(`La scelta del giocatore è ${playerChoice}.`);
  console.log(`La scelta del computer è ${computerChoice}.`);
} else if (playerChoice === "dispari") {
  computerChoice = "pari";
  console.log(`La scelta del giocatore è ${playerChoice}.`);
  console.log(`La scelta del computer è ${computerChoice}.`);
} else {
  console.log("hai inserito un valore non valido");
}

const playerNumber = prompt("scegli un numero compreso fra 1 e 5");

function checkSum(playerNumber, computerNumber) {
  if ((playerNumber + computerNumber) % 2 === 0) {
    console.log("umano vince!");
  } else {
    console.log("computer vince!");
  }
}

if (playerNumber >= 1 && playerNumber <= 5) {
  console.log(checkSum);
}
