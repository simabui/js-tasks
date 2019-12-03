"use strict";

const user = { name: "Mango", age: 2 };

const info = { mail: "poly@mail.com", isOnline: true, score: 500 };
const countProps = obj => Object.keys(obj).length;

document.write(`${countProps({})}\n`); //0
document.write(`${countProps(user)}\n`); //2
document.write(
  `${countProps(info)}` //3
);
