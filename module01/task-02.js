"use strict";

const total = 100;
const ordered = 10;

const totalOrdered =
  ordered > total
    ? "На складе недостаточно твоаров!"
    : ordered > 0 && ordered <= total
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "Введите правильное значение";

console.log(totalOrdered);
