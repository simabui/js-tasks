import collectionTemplate from "../templates/collections-temp.hbs";
import fetching from "./apiService.js";
import { refs } from "./handle-search";
import imagesLoaded from "../../node_modules/imagesloaded/imagesloaded.js";
import Mansory from "masonry-layout";

const options = {
  columnWidth: 33.3333,
  itemSelector: ".photo-card",
  percentPosition: true,
  transitionDuration: "0.3s"
  // gutter: 2
};

export function renderTemplate() {
  // fetch
  fetching.fetchCountries().then(obj => {
    const block = collectionTemplate(obj);
    buildMarkUp(block);
    cascadeImages();
  });
}

function buildMarkUp(data) {
  refs.gallery.insertAdjacentHTML("beforeend", data);
}

// Masontry plugin
function cascadeImages() {
  const msnry = new Mansory(refs.gallery, options);

  imagesLoaded(refs.gallery).on("progress", () => msnry.layout());
}
