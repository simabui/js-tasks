import fetching from "./apiService.js";
import { fetchTemplate } from "./fetch-template.js";
import { showOverlay } from "./light-box.js";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery"),
  loadButton: document.querySelector("#load")
};

refs.input.addEventListener("submit", handleSearch);
refs.loadButton.addEventListener("click", handleLoad);
refs.gallery.addEventListener("click", handleOverlay);

function handleSearch(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.query.value;
  fetching.setQuery = input;
  fetching.resetPage();
  fetchTemplate();
  refs.gallery.innerHTML = "";
}

function handleLoad(e) {
  e.preventDefault();
  // const coords = window.innerHeight;
  // window.scrollTo({
  //   left: coords,
  //   behavior: "smooth"
  // });
  fetchTemplate();
}

function handleOverlay({ target }) {
  if (target.nodeName !== "IMG") return;
  const image = target.dataset.large;
  showOverlay(image);
}
