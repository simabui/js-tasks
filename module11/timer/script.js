"use strict";
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]')
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.refs = {
      timer: document.querySelector(`${selector}`)
    };
    this.countTime();
  }

  countTime() {
    this.currentDate = Date.now();
    let time = this.targetDate - this.currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    setInterval(() => {
      refs.days.textContent = String(days);
      refs.hours.textContent = String(hours);
      refs.mins.textContent = String(mins);
      refs.secs.textContent = String(secs);
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 20, 2020")
});
