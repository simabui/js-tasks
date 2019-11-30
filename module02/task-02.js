"use strict";

const MESSAGE = "Donec orci lectus aliquam est";

const calcEngravingPrice = (str, pricePerWord) =>
  str.split(" ").length * pricePerWord;

alert(calcEngravingPrice(MESSAGE, 40)); //200
