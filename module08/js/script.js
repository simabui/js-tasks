"use strict";
import images from "./gallery-items.js";
import { renderImages } from "./renderImages.js";
import { refs } from "./refs.js";
import { handleKeyArrows } from "./handleArrows.js";

refs.jsGallery.addEventListener("click", showOriginal); //show big image
refs.button.addEventListener("click", closeButton); //close on button
refs.lightboxOverlay.addEventListener("click", handleOverlay); //close on overlay

const lightboxImage = document.querySelector(".lightbox__image");
// Render
renderImages(images);

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
