"use strict";

const food = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const addIngredients = ingredients => {
  const menu = document.querySelector("#ingredients");
  ingredients.map(ingredient => {
    const list = document.createElement("li");
    list.textContent = ingredient;
    menu.append(list);
  });
};

addIngredients(food);
