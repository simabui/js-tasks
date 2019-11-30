"use strict";

const MESSAGE = "The quick brown fox jumped over the lazy dog";

const findLongWord = str => {
  const WORDS = str.split(" ");
  const LONGESTWORD = WORDS.reduce((prev, next) => {
    return prev.length < next.length ? (prev = next) : prev;
  }, WORDS[0]);

  return LONGESTWORD;
};

document.write(findLongWord(MESSAGE)); // jumped
