"use strict";

const MESSAGEFIRST = "Curabitur ligula sapien, tincidunt non.";
const MESSAGESECOND = "Vestibulum facilisis, purus nec pulvinar iaculis.";
const MESSAGETHIRD = "Curabitur ligula sapien.";
const MESSAGEFOURTH =
  "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.";

const formatString = string => {
  let stringArr;
  let newString;

  if (string.length > 40) {
    stringArr = [...string].slice(0, 40); //cut string to 40 chars
    stringArr.push("...");
    newString = stringArr.join("");
    return newString;
  } else {
    return string;
  }
};

console.log(
  `${formatString(MESSAGEFIRST)}\n`,
  `${formatString(MESSAGESECOND)}\n`,
  `${formatString(MESSAGETHIRD)}\n`,
  `${formatString(MESSAGEFOURTH)}\n`
);
