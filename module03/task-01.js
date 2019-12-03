"use strict";

let user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

const getUser = object => {
  object.mood = "happy";
  object.hobby = "javascript";
  object.premium = false;

  Object.keys(object).map(key => document.write(`${key}: ${object[key]}\n`));
};

getUser(user);
