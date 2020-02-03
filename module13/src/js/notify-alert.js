import PNotify from "pnotify/dist/es/PNotify.js";

PNotify.defaults.height = "68px";
PNotify.defaults.delay = 3000;

const SUCCESS = "Success request";
const ALERT = "Not Found";
// success
export const success = () => {
  PNotify.success({
    text: SUCCESS
  });
};

export const alert = () => {
  PNotify.error({
    text: ALERT
  });
};
