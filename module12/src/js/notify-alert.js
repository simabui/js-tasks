import "pnotify/dist/PNotifyBrightTheme.css";
import PNotify from "pnotify/dist/es/PNotify.js";

PNotify.defaults.height = "68px";
PNotify.defaults.delay = 1000;

const ERROR_TEXT = "Too many matches found. Please enter a more specific query";

export const error = () => {
  try {
    PNotify.error({
      text: ERROR_TEXT
    });
  } catch (err) {
    console.error(err);
  }
};
