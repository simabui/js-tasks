import fetching from "./countries-request.js";
import countriesTemplate from "../templates/countries-temp.hbs";
import countryTemplate from "../templates/country-temp.hbs";
import { debounce } from "lodash";
import { error } from "./notify-alert";

const refs = {
  input: document.querySelector("#country-search"),
  list: document.querySelector(".countries__info")
};

refs.input.addEventListener("input", debounce(handlerInput, 500));

function handlerInput(e) {
  const input = e.target.value;

  if (input.length >= 1) {
    fetching
      .fetchCountries(input)
      // display error notify
      .then(country => {
        if (country.length > 10) {
          error();
          return;
        }
        //template list
        if (country.length > 1) {
          const countriesList = countriesTemplate(country);
          buildMarkUp(countriesList);
        } else {
          //temlate unique
          const countriesInfo = countryTemplate(country);
          buildMarkUp(countriesInfo);
        }
      })
      .catch(err => console.log(err));
  }
}

function buildMarkUp(data) {
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", data);
}
