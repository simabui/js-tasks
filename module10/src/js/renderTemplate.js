import menuItemtemplate from "./../templates/item-list.hbs";
import menu from "./menu.json";

export const refs = {
  jsMenu: document.querySelector(".js-menu"),
  switcher: document.querySelector(".switch"),
  body: document.querySelector("body"),
  inputSwitcher: document.querySelector(".js-switch-input")
};

export const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

(function buildMarkup(storage) {
  const markup = storage.map(food => menuItemtemplate(food)).join("");
  refs.jsMenu.insertAdjacentHTML("beforeend", markup);
})(menu);
