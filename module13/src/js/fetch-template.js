import collectionTemplate from "../templates/collections-temp.hbs";
import fetching from "./apiService.js";
import { refs } from "./handle-search";
import imagesLoaded from "imagesloaded/imagesloaded.js";
import Mansory from "masonry-layout";
import InfiniteScroll from "infinite-scroll";

export function renderTemplate() {
  // fetch
  fetching.fetchCountries().then(obj => {
    const block = collectionTemplate(obj);
    buildMarkUp(block);
    cascadeImages();
    // toTest();
    refs.loadButton.style.display = "block";
  });
}
// template
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

  // Infinite scroll
  const scrollOptions = {
    append: ".photo-card",
    history: false,
    path() {
      return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=3&q=cat&key=15109703-4df3afa39634f93d9eb19fc69&page=${this.pageIndex}`;
    },
    outlayer: msnry
  };
  const infScroll = new InfiniteScroll(refs.gallery, scrollOptions);

  console.log(infScroll);
}
