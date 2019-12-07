"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = (arr, value) =>
  arr
    .filter(product => product["name"] === value)
    .map(elem => elem.price * elem.quantity);

// calculateTotalPrice(products, "Радар");
console.log(calculateTotalPrice(products, "Радар")); //5200
console.log(calculateTotalPrice(products, "Дроид")); //2800
console.log(calculateTotalPrice(products, "Захват")); //2400
