import fetching from "./apiService.js";
import { renderTemplate } from "./fetch-template.js";
import { showOverlay } from "./light-box.js";
import debounce from "lodash.debounce";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery"),
  loadButton: document.querySelector("#load")
};

refs.input.addEventListener("input", debounce(handleSearch, 500));
refs.loadButton.addEventListener("click", debounce(handleLoad, 300));
refs.gallery.addEventListener("click", handleOverlay);

// Input event
function handleSearch(e) {
  e.preventDefault();
  const input = e.target.value;
  fetching.setQuery = input;
  fetching.resetPage();
  // Render
  renderTemplate();
  refs.gallery.innerHTML = "";
}

// Button event
function handleLoad(e) {
  e.preventDefault();
  // const coords = window.innerHeight;
  // window.scrollTo({
  //   left: coords,
  //   behavior: "smooth"
  // });
  renderTemplate();
}

function handleOverlay({ target }) {
  if (target.nodeName !== "IMG") return;
  const image = target.dataset.large;
  // Display big image
  showOverlay(image);
}
