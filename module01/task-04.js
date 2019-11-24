"use strict";

let credits = 23580;
let pricePerDroid = 300;
let purchase;
let isNonValid;
let formatPurchase;
let totalPrice;
let leftOver;

do {
  purchase = prompt("How many droids you want to buy");
  isNonValid = isNaN(purchase);

  if (purchase === null) {
    alert("Canceled purchase");
    break;
  } else if (!isNonValid) {
    formatPurchase = Number(purchase);
    totalPrice = formatPurchase * pricePerDroid;
    leftOver = credits - totalPrice;

    if (totalPrice > credits) {
      alert("Not enough money");
    } else {
      alert(`You bought ${purchase} droid(s), ${leftOver} credits left.`);
    }
  } else {
    //   check if input is NAN or less than zero or  float
    alert("Invalid input");
  }
} while (isNonValid || purchase <= 0 || purchase % 1 !== 0);
