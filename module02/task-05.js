"use strict";

const TEXT = "Get best sale offers now!";
const TEXTSECOND = "Latest technology news";
const TEXTTHRID = "JavaScript weekly newsletter";
const TEXTFOURTH = "[SPAM] How to earn fast money?";

const checkForSpam = string => {
  const word = string.toLowerCase();

  return word.includes("sale") || word.includes("spam");
};

document.write(`${checkForSpam(TEXT)}\n`); //true
document.write(`${checkForSpam(TEXTSECOND)}\n`); // false
document.write(`${checkForSpam(TEXTTHRID)}\n`); //false
document.write(`${checkForSpam(TEXTFOURTH)}\n`); // true
