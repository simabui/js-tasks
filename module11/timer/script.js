"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} span[data-value="days"]`),
      hours: document.querySelector(`${selector} span[data-value="hours"]`),
      mins: document.querySelector(`${selector} span[data-value="mins"]`),
      secs: document.querySelector(`${selector} span[data-value="secs"]`)
    };
    this.countTime();
  }

  countTime() {
    setInterval(() => {
      if (this.targetDate <= this.currentDate) {
        document.querySelector(
          ".error-message"
        ).textContent = ` Error in Target Date of \"${this.selector.substring(
          1
        )}"\ `;
        return;
      }
      this.calcTime();
      this.updateTime();
    }, 1000);
  }

  calcTime() {
    this.currentDate = Date.now();
    let time = this.targetDate - this.currentDate;
    this.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((time % (1000 * 60)) / 1000);
  }

  updateTime() {
    this.refs.days.textContent = this.days;
    this.refs.hours.textContent = this.hours;
    this.refs.mins.textContent = this.mins;
    this.refs.secs.textContent = this.secs;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 21, 2020")
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jan 19, 2030")
});
