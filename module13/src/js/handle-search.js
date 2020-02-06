import { recieveValue, fetchResponse, resetButton } from "./apiService.js";
import { showOverlay } from "./light-box.js";
import debounce from "lodash.debounce";

export const refs = {
  input: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery")
};

refs.input.addEventListener("submit", debounce(handleSearch, 500));
refs.gallery.addEventListener("click", handleOverlay);
document.querySelector("#load").addEventListener("click", handleReset);

// Input event
function handleSearch(e) {
  if (e.target.nodeName !== "INPUT") return;

  e.preventDefault();
  recieveValue(e.target.value);
  fetchResponse();
}

function handleOverlay({ target }) {
  if (target.nodeName !== "IMG") return;
  const image = target.dataset.large;
  // Display big image
  showOverlay(image);
}

function handleReset() {
  resetButton;
}
