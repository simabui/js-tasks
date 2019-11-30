"use strict";

const text = "Get best sale offers now!";
const textSecond = "Latest technology news";
const textThird = "JavaScript weekly newsletter";
const textFourth = "[SPAM] How to earn fast money?";

const checkForSpam = string => {
  const word = string.toLowerCase();

  return word.includes("sale") || word.includes("spam");
};

document.write(`${checkForSpam(text)}\n`); //true
document.write(`${checkForSpam(textSecond)}\n`); // false
document.write(`${checkForSpam(textThird)}\n`); //false
document.write(`${checkForSpam(textFourth)}\n`); // true
