"use strict";

const countCategories = () => {
  const items = document.querySelectorAll(".item");
  console.log(`В списке ${items.length} категории`);
};

const countItems = () => {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    console.log(`Категория: ${item.children[0].textContent}`);
    console.log(`Количество элементов: ${item.children[1].children.length}`);
  });
};

countCategories();
countItems();
