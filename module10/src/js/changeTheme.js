import { saveToLocal } from "./localStorage";

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

// light by default;
refs.body.classList.add(Theme.LIGHT);
refs.switcher.addEventListener("change", onChange);

function onChange(e) {
  if (e.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    saveToLocal();
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    saveToLocal();
  }
}
