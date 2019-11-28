"use strict";

let input;
const numbers = [];
let total = 0;

const calcInput = function() {
	while (true) {
		input = prompt("Input number");
		let isString = isNaN(input); // check input value on NaN
		let numInput = parseFloat(input); //  input to float number
		if (input === null) {
			if (numbers.length > 0) {
				// check array not empty
				for (let number of numbers) {
					total = total + number; // sum arrays
				}
				return total;
			} else {
				return "Array is empty";
			}
			break;
		}

		if (isString) {
			// if input not num
			alert("Incorrect value");
			continue; // don't save in array
		}

		numbers.push(numInput); // insert input to array
	}
};

document.write(calcInput());
