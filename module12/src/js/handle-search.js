import fetching from "./countries-service.js";
import countriesTemplate from "../templates/countries-temp.hbs";
import debounce from "../../node_modules/lodash.debounce";

const refs = {
  input: document.querySelector("#country-search"),
  list: document.querySelector(".countries__list")
};

refs.input.addEventListener("input", debounce(handlerInput, 500));

function handlerInput(e) {
  const input = e.target.value;

  fetching.fetchCountries(input).then(country => {
    const markUp = countriesTemplate(country);
    markUp;
    buildMarkUp(markUp);
  });
}

function buildMarkUp(data) {
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", data);
}
