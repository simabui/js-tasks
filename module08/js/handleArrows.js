import images from "./gallery-items.js";

const lightboxImage = document.querySelector(".lightbox__image");

export function handleKeyArrows(e) {
  const base = {
    current: images.findIndex(({ original }) => original === lightboxImage.src),
    moveForward() {
      if (this.current === images.length - 1) {
        lightboxImage.src = images[0].original;
        lightboxImage.alt = images[0].description;
      } else {
        lightboxImage.src = images[this.current + 1].original;
        lightboxImage.alt = images[this.current + 1].description;
      }
    },
    moveBack() {
      if (this.current === 0) {
        lightboxImage.src = images[images.length - 1].original;
        lightboxImage.alt = images[images.length - 1].description;
      } else {
        lightboxImage.src = images[this.current - 1].original;
        lightboxImage.alt = images[this.current - 1].description;
      }
    }
  };

  if (e.code === "ArrowRight") {
    base.moveForward();
  }
  if (e.code === "ArrowLeft") {
    base.moveBack();
  }
}
