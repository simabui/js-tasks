import collectionTemplate from "../templates/collections-temp.hbs";
import fetching from "./apiService.js";
import { refs } from "./handle-search";
import { alert } from "./notify-alert";

export function fetchTemplate() {
  // fetch
  fetching.fetchCountries().then(obj => {
    alert();
    const block = collectionTemplate(obj);
    buildMarkUp(block);
  });
}

function buildMarkUp(data) {
  refs.gallery.insertAdjacentHTML("beforeend", data);
}
