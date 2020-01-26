import fetching from "./countries-service.js";
import countriesTemplate from "../templates/country-list.hbs";

const refs = {
  input: document.querySelector("#country-search")
};

refs.input.addEventListener("input", handlerInput);

function handlerInput(e) {
  const input = e.target.value;

  const markUp = fetching
    .fetchCountries(input)
    .then(country => renderTemplate(country));
  console.log(markUp);
}

function renderTemplate(data) {
  return countriesTemplate(data);
}
