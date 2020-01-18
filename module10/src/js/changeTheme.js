import { refs, Theme } from "./renderTemplate";
import { saveToLocal } from "./localStorage";

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
