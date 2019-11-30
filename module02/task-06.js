"use strict";

let input;
const NUMBERS = [];
let total;

const calcInput = function() {
  while (input !== null) {
    input = prompt("Input a number");

    if (input === null) break;

    if (isNaN(input)) {
      alert("Incorrect value");
      continue; // skip
    }

    NUMBERS.push(Number(input)); // insert input to array
    total = NUMBERS.reduce((acc, number) => acc + number, 0);
  }

  return total;
};

document.write(calcInput());
