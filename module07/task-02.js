"use strict";

const food = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const addIngredients = ingredients => {
  const menu = document.querySelector("#ingredients");
  const edited = ingredients.map(ingredient => {
    const list = document.createElement("li");
    list.textContent = ingredient;
    return list;
  });
  menu.append(...edited);
};

addIngredients(food);
