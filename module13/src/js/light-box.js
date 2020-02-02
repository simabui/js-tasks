import * as basicLightbox from "basiclightbox";

export function showOverlay(img) {
  const template = `<img src=${img} width="800" height="600">`;
  const lightbox = basicLightbox.create(template);

  lightbox.show();
}
