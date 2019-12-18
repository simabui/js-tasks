"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// (min => {
//   input.setAttribute("min", `${min}`);
//   return max => {
//     input.setAttribute("max", `${max}`);
//     text.style.fontSize = `${input.value}px`;
//   };
// })(0)(100);

const changeSize = ({ target }) => {
  text.style.fontSize = `${target.value}px`;
};

input.addEventListener("input", changeSize);
