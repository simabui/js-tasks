"use strict";

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject("Error in function");
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);
const rejectLog = err => console.log(`Error: ${err}`);
// Вызовы функции для проверки
delay(2000)
  .then(logger)
  .catch(rejectLog); // Resolved after 2000ms
delay(1000)
  .then(logger)
  .catch(rejectLog); // Resolved after 1000ms
delay(1500)
  .then(logger)
  .catch(rejectLog); // Resolved after 1500ms
