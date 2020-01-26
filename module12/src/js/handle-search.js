import fetching from "./countries-service.js";
import countriesTemplate from "../templates/countries-temp.hbs";

const refs = {
  input: document.querySelector("#country-search"),
  list: document.querySelector(".countries__list")
};

refs.input.addEventListener("input", handlerInput);

function handlerInput(e) {
  const input = e.target.value;

  fetching.fetchCountries(input).then(country => {
    const markUp = renderTemplate(country);
    buildMarkUp(markUp);
  });
}

function renderTemplate(data) {
  return countriesTemplate(data);
}

function buildMarkUp(data) {
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", data);
}
