"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const showInput = () => {
  return input.value !== ""
    ? (output.textContent = input.value)
    : (output.textContent = "незнакомец");
};

input.addEventListener("input", showInput);
