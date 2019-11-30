"use strict";

const NUMBERS = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = array => {
  for (let i = 0; i < array.length; i++) {
    document.write(`${i + 1} - ${array[i]}\n`);
  }
};

logItems(NUMBERS);
