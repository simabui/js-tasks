"use strict";

const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", () => {
  if (input.value.length !== inputLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
