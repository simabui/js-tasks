import { refs } from "./refs.js";
// Render Images
export const renderImages = storage => {
  const markUP = storage.reduce(buildTemplate, "");
  refs.jsGallery.innerHTML = markUP;
};

function buildTemplate(acc, image) {
  return (
    acc +
    `
  <li class="gallery__item">
    <a class="gallery__link" href="#">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`
  );
}
