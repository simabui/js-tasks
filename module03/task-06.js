"use strict";

const products = [
	{ name: "Радар", price: 1300, quantity: 4 },
	{ name: "Сканер", price: 2700, quantity: 3 },
	{ name: "Дроид", price: 400, quantity: 7 },
	{ name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(arr, keyValue) {
	let totalPrice;
	let valuePrice;
	let valueQuantity;

	for (let i = 0; i < arr.length; i++) {
		valuePrice = arr[i]["price"]; // recieve value by key "price"
		valueQuantity = arr[i]["quantity"]; // recieve value by key "quantity"
		if (arr[i]["name"] === keyValue) {
			// if object key equal func parameter
			totalPrice = valuePrice * valueQuantity;
			return totalPrice;
		}
	}
};

document.write(calculateTotalPrice(products, "Радар") + "<br>"); //5200
document.write(calculateTotalPrice(products, "Дроид") + "<br>"); //2800
document.write(calculateTotalPrice(products, "Захват") + "<br>"); //2400
