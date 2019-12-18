"use strict";

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
let inputValue;
let boxesCollection = [];

// Get Amount of Input
const getAmount = ({ target }) => {
  inputValue = target.value;
};

// CREATE BOXES
const createBoxes = amount => {
  if (amount > 100) {
    alert("too high number");
    return;
  }

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    boxesCollection.push(box);
    console.log(boxesCollection);
  }

  for (let i = 0; i < boxesCollection.length; i++) {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    boxesCollection[i].style.width = "30px";
    boxesCollection[i].style.height = "30px";
    boxesCollection[i].style.backgroundColor = `rgb(${r},${g}, ${b})`;
    boxes.append(boxesCollection[i]);
  }
};
// DESTROY BOXES
const destroyBoxes = () => {
  boxes.textContent = "";
  boxesCollection = [];
};

controls.addEventListener("input", getAmount);

controls.addEventListener("click", ({ target }) => {
  return target.dataset.action === "render"
    ? createBoxes(inputValue)
    : target.dataset.action === "destroy"
    ? destroyBoxes()
    : null;
});
