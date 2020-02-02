import fetching from "./apiService.js";
import collectionTemplate from "../templates/collections-temp.hbs";
import debounce from "../../node_modules/lodash.debounce";
import { alert } from "./notify-alert";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery")
};

refs.input.addEventListener("submit", handleSearch);

function handleSearch(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.query.value;

  fetching.fetchCountries(input).then(obj => {
    const test = collectionTemplate(obj);
    buildMarkUp(test);
  });
}

function buildMarkUp(data) {
  refs.gallery.insertAdjacentHTML("beforeend", data);
}
