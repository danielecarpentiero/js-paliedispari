"use strict";

let playerChoice = prompt("scegli fra pari o dispari");
while (playerChoice !== "pari" && playerChoice !== "dispari") {
  playerChoice = prompt("Valore errato, scegli fra pari o dispari");
}

if (playerChoice === "pari") {
  console.log("il giocatore ha scelto pari, il computer è quindi dispari.");
} else {
  console.log("il giocatore ha scelto dispari, il computer è quindi pari.");
}

let playerNumber = Number(prompt("scegli un numero compreso fra 1 e 5"));
while (playerNumber <= 1 || playerNumber >= 5 || isNaN(playerNumber)) {
  playerNumber = Number(
    prompt("Inserisci un numero valido compreso fra 1 e 5")
  );
}
console.log(`il giocatore ha scelto ${playerNumber}`);

let computerChoice = computerNumber();
console.log(`il computer ha scelto ${computerChoice}`);

const totSum = playerNumber + computerChoice;
console.log(`la somma dei due numeri è ${totSum}`);

const oddEvenRes = checkSum(totSum);
console.log(`siccome è ${oddEvenRes}, allora`);

if (playerChoice === oddEvenRes) {
  console.log("il giocatore vince!");
} else {
  console.log("il computer vince!");
}

function computerNumber() {
  const computerRandom = Math.floor(Math.random() * 5 + 1);
  return computerRandom;
}

function checkSum(number) {
  if (number % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
