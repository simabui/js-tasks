import fetching from "./countries-service.js";
import countriesTemplate from "../templates/countries-temp.hbs";
import countryTemplate from "../templates/country-temp.hbs";
import debounce from "../../node_modules/lodash.debounce";

const refs = {
  input: document.querySelector("#country-search"),
  list: document.querySelector(".countries__list")
};

refs.input.addEventListener("input", debounce(handlerInput, 500));

function handlerInput(e) {
  const input = e.target.value;

  fetching.fetchCountries(input).then(country => {
    if (country.length > 1) {
      buildMarkUp(countriesTemplate(country));
    } else {
      buildMarkUp(countryTemplate(country));
    }
  });
}

function buildMarkUp(data) {
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", data);
}
