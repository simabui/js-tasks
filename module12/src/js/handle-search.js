import fetching from "./countries-request.js";
import countriesTemplate from "../templates/countries-temp.hbs";
import countryTemplate from "../templates/country-temp.hbs";
import debounce from "../../node_modules/lodash.debounce";
import { alert } from "./notify-alert";

const refs = {
  input: document.querySelector("#country-search"),
  list: document.querySelector(".countries__info")
};

refs.input.addEventListener("input", debounce(handlerInput, 500));

function handlerInput(e) {
  const input = e.target.value;

  if (input.length >= 1) {
    fetching.fetchCountries(input).then(country => {
      if (country.length > 10) {
        alert();
      }

      if (country.length > 1) {
        const countriesList = countriesTemplate(country);
        buildMarkUp(countriesList);
      } else {
        const countriesInfo = countryTemplate(country);
        buildMarkUp(countriesInfo);
      }
    });
  }
}

function buildMarkUp(data) {
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", data);
}
