"use strict";
const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  isActive: false,
  changeColor() {
    if (this.isActive) return;
    this.isActive = true;

    this.timerID = setInterval(this.setColor, 1000);
  },
  setColor() {
    const randomIndex = randomInt(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomIndex];
  },
  stopChange() {
    clearInterval(this.timerID);
    this.isActive = false;
  }
};

refs.start.addEventListener("click", timer.changeColor.bind(timer));
refs.stop.addEventListener("click", timer.stopChange.bind(timer));
