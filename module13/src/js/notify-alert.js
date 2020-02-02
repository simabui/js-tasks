import PNotify from "../../node_modules/pnotify/dist/es/PNotify.js";

PNotify.defaults.height = "68px";
PNotify.defaults.delay = 3000;

const SUCCESS = "Success request";

export const alert = () => {
  PNotify.success({
    text: SUCCESS
  });
};
