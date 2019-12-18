"use strict";
const obj = {
  counter: 0,
  text: document.querySelector("#value"),
  changeText() {
    this.text.textContent = this.counter;
  },
  increment() {
    this.counter += 1;
    this.changeText();
  },

  decrement() {
    this.counter -= 1;
    this.changeText();
  }
};

const counter = document.querySelector("#counter");

const changeValue = ({ target }) => {
  return target.dataset.action === "increment"
    ? obj.increment()
    : target.dataset.action === "decrement"
    ? obj.decrement()
    : null;
};

counter.addEventListener("click", changeValue);
