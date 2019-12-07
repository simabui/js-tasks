"use strict";

const females = { ann: 29, david: 35, helen: 1, lorence: 99 };
const fruits = { poly: 12, mango: 17, ajax: 4 };
const male = { lux: 147, david: 21, kiwi: 19, chelsy: 38 };

const findKeyByValue = (obj, number) =>
  Object.keys(obj).find(key => obj[key] === number);

const findBestEmployee = object => {
  const objValue = Object.values(object);

  const highestScore = objValue.reduce((firstNum, nextNum) =>
    firstNum < nextNum ? (firstNum = nextNum) : firstNum
  );

  const bestEmployee = findKeyByValue(object, highestScore);

  return bestEmployee;
  // for (let employee in object) {
  //   if (maxCompletedTasks < object[employee]) {
  //     maxCompletedTasks = object[employee];
  //     bestEmployee = employee;
  //   }
  // }
};

document.write(`${findBestEmployee(females)}\n`); // lorence
document.write(`${findBestEmployee(fruits)}\n`); // mango
document.write(`${findBestEmployee(male)}`); // lux
