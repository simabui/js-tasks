"use strict";

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
let inputValue;

// Get Amount of Input
const getAmount = ({ target }) => {
  inputValue = target.value;
};

// CREATE BOXES
const createBoxes = amount => {
  let boxesCollection = [];
  if (amount > 100) {
    alert("too high number");
    return;
  }
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    let box = `<div style="width:${size}px; height:${size}px; background-color:rgb(${r},${g},${b});">`;
    size += 10;
    boxesCollection.push(box);
    boxes.insertAdjacentHTML("beforeend", boxesCollection[i]);
  }
};
// DESTROY BOXES
const destroyBoxes = () => {
  boxes.textContent = "";
};

controls.addEventListener("input", getAmount);

controls.addEventListener("click", ({ target }) => {
  return target.dataset.action === "render"
    ? createBoxes(inputValue)
    : target.dataset.action === "destroy"
    ? destroyBoxes()
    : null;
});
