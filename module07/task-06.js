"use strict";

const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

const checkValid = () => {
  input.classList.add("invalid");
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};
input.addEventListener("blur", checkValid);
