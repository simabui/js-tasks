"use strict";
const findBestEmployee = object => {
  let maxCompletedTasks = 0;
  let bestEmployee;
  Object.entries(object).filter(employee => console.log(Math.max(employee[1])));
  // for (let employee in object) {
  //   if (maxCompletedTasks < object[employee]) {
  //     maxCompletedTasks = object[employee];
  //     bestEmployee = employee;
  //   }
  // }

  // return bestEmployee;
};

const females = { ann: 29, david: 35, helen: 1, lorence: 99 };
const fruits = { poly: 12, mango: 17, ajax: 4 };
const male = { lux: 147, david: 21, kiwi: 19, chelsy: 38 };

document.write(`${findBestEmployee(females)}\n`); // lorence
// document.write(`${findBestEmployee(fruits)}\n`); // mango
// document.write(`${findBestEmployee(male)}`); // lux
