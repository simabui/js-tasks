"use strict";
import images from "./gallery-items.js";

const refs = {
  jsGallery: document.querySelector(".js-gallery"),
  jsLightBox: document.querySelector(".js-lightbox"),
  lightboxOverlay: document.querySelector(".lightbox__content"),
  button: document.querySelector('button[data-action="close-lightbox"]')
};
// Render Images
(function(storage) {
  const renderImages = image => {
    const imageMarkup = `
    <li class="gallery__item">
      <a class="gallery__link" href="#">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>`;

    refs.jsGallery.insertAdjacentHTML("beforeend", imageMarkup);
  };

  return storage.map(renderImages);
})(images);

refs.jsGallery.addEventListener("click", showOriginal); //show big image
refs.button.addEventListener("click", closeButton); //close on button
refs.lightboxOverlay.addEventListener("click", handleOverlay); //close on overlay

const lightboxImage = document.querySelector(".lightbox__image");

// show original image in overlay
function showOriginal({ target }) {
  if (target.nodeName !== "IMG") return;

  const original = target.dataset.source;
  const description = target.alt;

  refs.jsLightBox.classList.add("is-open");
  document.body.style.overflow = "hidden"; //lock body scroll
  lightboxImage.src = "";
  lightboxImage.src = original;
  lightboxImage.alt = description;

  window.addEventListener("keydown", handleKeyDown); //close on escape
  window.addEventListener("keydown", handleKeyArrows); //changeImage on arrows
}

// close overlay on click button
function closeButton() {
  refs.jsLightBox.classList.remove("is-open");
  document.body.style.overflow = ""; //unlock body scroll

  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keydown", handleKeyArrows);
}

// close overlay on click overlay
function handleOverlay(e) {
  if (e.target !== e.currentTarget) return;

  closeButton();
}

// close on Escape button
function handleKeyDown(e) {
  if (e.code !== "Escape") return;
  closeButton();
}

function handleKeyArrows(e) {
  const galleryImages = document.querySelectorAll(".gallery__image");
  const orgImages = [];
  for (let image of galleryImages) {
    orgImages.push({
      src: image.dataset.source,
      alt: image.alt
    });
  }

  const current = orgImages.findIndex(({ src }) => src === lightboxImage.src);

  if (e.code === "ArrowRight") {
    if (current === orgImages.length - 1) {
      lightboxImage.src = orgImages[0].src;
      lightboxImage.alt = orgImages[0].alt;
    }
    if (current < orgImages.length - 1) {
      lightboxImage.src = orgImages[current + 1].src;
      lightboxImage.alt = orgImages[current + 1].alt;
    }
  }

  if (e.code === "ArrowLeft") {
    if (current < 1) {
      lightboxImage.src = orgImages[orgImages.length - 1].src;
      lightboxImage.alt = orgImages[orgImages.length - 1].alt;
    }
    if (current !== 0) {
      lightboxImage.src = orgImages[current - 1].src;
      lightboxImage.alt = orgImages[current - 1].alt;
    }
  }
}
