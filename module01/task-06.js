"use strict";

let total = 0;
let input;
let isString;
while (true) {
	input = prompt("Enter integer", "");
	isString = isNaN(input); // return true
	if (input === null) {
		break;
	}

	if (isString) {
		alert("Invalid input, try again");
		continue;
	}
	input = Number(input); //convert to integer
	total += input;
}
alert(`Sum of inputs is equal ${total}`);
