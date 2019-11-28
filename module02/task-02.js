"use strict";

const message = "Donec orci lectus aliquam est";

const calcEngravingPrice = (str, pricePerWord) => {
  return str.split(" ").length * pricePerWord;
};

alert(calcEngravingPrice(message, 40)); //200
