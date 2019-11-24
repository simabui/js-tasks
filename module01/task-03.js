"use strict";

const ADMIN_PASSWORD = "111";
let input = prompt("Enter Password", "");

const inputPass =
  ADMIN_PASSWORD === input
    ? alert("Welcome!")
    : input === null
    ? alert("Canceled by user")
    : alert("Incorrect Password");
