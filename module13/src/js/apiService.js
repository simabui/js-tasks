import { alert, success } from "./notify-alert";
import { refs } from "./handle-search";
import imagesLoaded from "imagesloaded/imagesloaded.js";
import Mansory from "masonry-layout";
import InfiniteScroll from "infinite-scroll";
import collectionTemplate from "../templates/collections-temp.hbs";

const baseURL =
  "https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=3";
const KEY = "&key=15109703-4df3afa39634f93d9eb19fc69";
let input = "";
export function recieveValue(value) {
  return (input = value);
}
export default {
  fetchCountries() {
    const msnryOptions = {
      columnWidth: 33.3333,
      itemSelector: ".photo-card",
      percentPosition: true,
      transitionDuration: "0.3s",
      visibleStyle: { transform: "translateY(0)", opacity: 1 },
      hiddenStyle: { transform: "translateY(100px)", opacity: 0 }
    };
    // Masonry
    const msnry = new Mansory(refs.gallery, msnryOptions);
    // Infinite scroll
    const scrollOptions = {
      responseType: "text",
      history: false,
      outlayer: msnry,
      path() {
        return `${baseURL} + ${KEY} + &q=${input} + &page=${this.pageIndex}`;
      }
    };

    const infScroll = new InfiniteScroll(refs.gallery, scrollOptions);

    infScroll.on("load", response => {
      if (input < 1) return;
      const images = JSON.parse(response);
      if (response.status.length > 1) success();
      if (response.status.length < 1) alert();
      const markup = images.hits
        .map(image => collectionTemplate(image))
        .join("");

      const placeholder = document.createElement("div");
      placeholder.innerHTML = markup;
      const parsedItems = placeholder.querySelectorAll(".photo-card");

      infScroll.appendItems(parsedItems);
    });
    infScroll.loadNextPage();
    imagesLoaded(refs.gallery).on("progress", () => msnry.layout());
  }
};
