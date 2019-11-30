"use strict";

let input;
const numbers = [];
let total;

const calcInput = function() {
  while (input !== null) {
    input = prompt("Input a number");

    if (input === null) break;

    if (isNaN(input)) {
      alert("Incorrect value");
      continue; // skip
    }

    numbers.push(Number(input)); // insert input to array
    total = numbers.reduce((acc, number) => acc + number, 0);
  }
  return total;
};

document.write(calcInput());
