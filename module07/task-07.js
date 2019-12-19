"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeSize = ({ target }) => {
  text.style.fontSize = `${target.value}px`;
};

input.addEventListener("input", changeSize);
