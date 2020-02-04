import fetching from "./apiService.js";
import { recieveValue } from "./apiService.js";
import { showOverlay } from "./light-box.js";
import debounce from "lodash.debounce";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery")
};

refs.input.addEventListener("input", debounce(handleSearch, 1000));
refs.gallery.addEventListener("click", handleOverlay);

// Input event
function handleSearch(e) {
  e.preventDefault();
  recieveValue(e.target.value);
  fetching.fetchCountries();
  refs.gallery.innerHTML = "";
}

function handleOverlay({ target }) {
  if (target.nodeName !== "IMG") return;
  const image = target.dataset.large;
  // Display big image
  showOverlay(image);
}
