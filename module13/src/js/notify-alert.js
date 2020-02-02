import PNotify from "../../node_modules/pnotify/dist/es/PNotify.js";

PNotify.defaults.height = "68px";
PNotify.defaults.delay = 3000;

const ERROR_TEXT = "Too many matches found. Please enter a more specific query";

export const alert = () => {
  PNotify.error({
    text: ERROR_TEXT
  });
};
