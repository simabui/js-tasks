import collectionTemplate from "../templates/collections-temp.hbs";
import fetching from "./apiService.js";
import { refs } from "./handle-search";
import imagesLoaded from "imagesloaded/imagesloaded.js";
import Mansory from "masonry-layout";

export function renderTemplate() {
  // fetch
  fetching.fetchCountries().then(obj => {
    const block = collectionTemplate(obj);
    buildMarkUp(block);
    cascadeImages();
    refs.loadButton.style.display = "block";
  });
}
//render template
function buildMarkUp(data) {
  refs.gallery.insertAdjacentHTML("beforeend", data);
}

// Masonry plugin
const options = {
  columnWidth: 33.3333,
  itemSelector: ".photo-card",
  percentPosition: true,
  transitionDuration: "0.3s"
};

function cascadeImages() {
  const msnry = new Mansory(refs.gallery, options);

  imagesLoaded(refs.gallery).on("progress", () => msnry.layout());
}
