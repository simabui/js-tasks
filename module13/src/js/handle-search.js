import fetching from "./apiService.js";
import collectionTemplate from "../templates/collections-temp.hbs";
import debounce from "../../node_modules/lodash.debounce";
import { alert } from "./notify-alert";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery"),
  loadButton: document.querySelector("#load")
};

refs.input.addEventListener("submit", handleSearch);
refs.loadButton.addEventListener("click", handleLoad);

function handleSearch(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.query.value;
  fetching.setQuery = input;
  fetching.resetPage();
  fetchTemplate();
  refs.gallery.innerHTML = "";
}

function buildMarkUp(data) {
  refs.gallery.insertAdjacentHTML("beforeend", data);
}

function handleLoad(e) {
  e.preventDefault();
  fetchTemplate();
}

function fetchTemplate() {
  // fetch
  fetching.fetchCountries().then(obj => {
    const block = collectionTemplate(obj);
    buildMarkUp(block);
  });
}
