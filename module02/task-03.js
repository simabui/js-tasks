"use strict";

const message = "The quick brown fox jumped over the lazy dog";

const findLongWord = str => {
  const words = str.split(" ");
  const longestWord = words.reduce((prev, next) => {
    return prev.length < next.length ? (prev = next) : prev;
  }, words[0]);

  return longestWord;
};

document.write(findLongWord(message)); // jumped
// let longestWord = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
