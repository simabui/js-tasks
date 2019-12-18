"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  return input.value !== ""
    ? (output.textContent = input.value)
    : (output.textContent = "незнакомец");
});
