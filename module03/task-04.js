"use strict";
const groupA = {
  mango: 100,
  poly: 150,
  alfred: 80
};

const groupB = {
  kiwi: 200,
  lux: 50,
  chelsy: 150
};

const groupC = {};

const countTotalSalary = function(employees) {
  const salaries = Object.values(employees);
  return salaries.reduce(
    (totalSalary, employeeSalary) => totalSalary + employeeSalary,
    0
  );
};

document.write(`${countTotalSalary(groupA)}\n`); // 330
document.write(`${countTotalSalary(groupB)}\n`); // 400
document.write(`${countTotalSalary(groupC)}\n`); // 0
