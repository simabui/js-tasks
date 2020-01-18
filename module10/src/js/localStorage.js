import { refs, Theme } from "./renderTemplate";

export function saveToLocal() {
  try {
    localStorage.setItem("theme", refs.body.className);
  } catch (err) {
    console.error("Set state error: ", err);
  }
}

function setFromLocal() {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === Theme.DARK) {
      refs.body.classList.add(theme);
      refs.body.classList.remove(Theme.LIGHT);
      refs.inputSwitcher.checked = true;
    }
  } catch (err) {
    console.error("Set state error: ", err);
  }
}
setFromLocal();
