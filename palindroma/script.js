function checkPalindrome(string) {
  // converte stringa ad array
  const arrayValues = string.split("");

  // valori al contrario
  const reverseArrayValues = arrayValues.reverse();

  // converte valori a stringa
  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log(`La parola che hai inserito, ${string}, è palindroma.`);
  } else {
    console.log(`La parola che hai inserito, ${string}, non è palindroma.`);
  }
}

//take input
const string = prompt("Inserisci una parola: ");

checkPalindrome(string);
