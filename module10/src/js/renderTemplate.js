import menuItemtemplate from "./../templates/item-list.hbs";
import menu from "./menu.json";
import { refs } from "./changeTheme";

(function buildMarkup(storage) {
  const markup = storage.reduce(
    (acc, food) => acc + menuItemtemplate(food),
    ""
  );
  refs.jsMenu.insertAdjacentHTML("beforeend", markup);
})(menu);
