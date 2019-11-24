"use strict";

let input = prompt(
	"Choose country to ship: China, Chile, Australia, India, Jamaica",
	""
);
let country;
let cost;

if (input === null) {
	alert("Canceled by user");
} else {
	input = input.toLowerCase();

	switch (input) {
		case "china":
			country = "China";
			cost = 100;
			alert(`Shipping to ${country} will cost ${cost} credits`);
			break;

		case "chile":
			country = "Chile";
			cost = 250;
			alert(`Shipping to ${country} will cost ${cost} credits`);
			break;

		case "australia":
			country = "Australia";
			cost = 170;
			alert(`Shipping to ${country} will cost ${cost} credits`);
			break;

		case "india":
			country = "India";
			cost = 80;
			alert(`Shipping to ${country} will cost ${cost} credits`);
			break;

		case "jamaica":
			country = "Jamaica";
			cost = 120;
			alert(`Shipping to ${country} will cost ${cost} credits`);
			break;

		default:
			alert("Incorrect input");
	}
}
