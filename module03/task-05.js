"use strict";

const products = [
	{ name: "Радар", price: 1300, quantity: 4 },
	{ name: "Сканер", price: 2700, quantity: 3 },
	{ name: "Дроид", price: 400, quantity: 7 },
	{ name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, key) {
	let objectArray = []; //new Array
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i][key]);
		objectArray.push(arr[i][key]); //put in array object value
	}

	return objectArray;
};

document.write(getAllPropValues(products, "name") + "<br>"); // ['Радар', 'Сканер', 'Дроид', 'Захват']
document.write(getAllPropValues(products, "quantity") + "<br>"); // [4, 3, 7, 2]
document.write(getAllPropValues(products, "category") + "<br>"); // []
