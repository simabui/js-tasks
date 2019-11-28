"use strict";

const messageFirst = "Curabitur ligula sapien, tincidunt non.";
const messageSecond = "Vestibulum facilisis, purus nec pulvinar iaculis.";
const messageThird = "Curabitur ligula sapien.";
const messageFourth =
  "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.";

const formatString = string => {
  let newString;
  if (string.length > 40) {
    string = string.split("").splice(0, 40); //cut string to 40 chars
    string.push("...");
    newString = string.join("");

    return newString;
  } else {
    return string;
  }
};

console.log(
  `${formatString(messageFirst)}\n`,
  `${formatString(messageSecond)}\n`,
  `${formatString(messageThird)}\n`,
  `${formatString(messageFourth)}\n`
);
