"use strict";
"use strict";
const countTotalSalary = function(employees) {
	const salaries = Object.values(employees); // put in array object properties
	let totalSalary = 0;

	for (let salary of salaries) {
		totalSalary += salary;
	}

	return totalSalary;
};
document.write(countTotalSalary({}) + "<br>"); // 0

document.write(
	countTotalSalary({
		mango: 100,
		poly: 150,
		alfred: 80
	}) + "<br>"
); // 330

document.write(
	countTotalSalary({
		kiwi: 200,
		lux: 50,
		chelsy: 150
	}) + "<br>"
); // 400
