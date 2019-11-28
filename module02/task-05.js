"use strict";

const checkForSpam = function(string) {
	const words = string.toLowerCase();

	return words.includes("sale") || words.includes("spam");
};

document.write(checkForSpam("Get best sale offers now!") + "<br>"); //true
document.write(checkForSpam("Latest technology news") + "<br>"); // false
document.write(checkForSpam("JavaScript weekly newsletter") + "<br>"); //false
document.write(checkForSpam("[SPAM] How to earn fast money?") + "<br>"); // true
