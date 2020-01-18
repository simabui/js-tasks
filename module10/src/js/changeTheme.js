import { refs } from "./renderTemplate";

refs.switcher.addEventListener("change", onChange);

function onChange(e) {
  if (e.target.checked) {
    refs.body.classList.add("dark-theme");
    refs.body.classList.remove("light-theme");
  } else {
    refs.body.classList.add("light-theme");
    refs.body.classList.remove("dark-theme");
  }
}
