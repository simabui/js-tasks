import axios from "axios";

const baseURL = "https://restcountries.eu/rest/v2/name/";
const block = document.querySelector(".countries__info");

export default {
  fetchCountries(country) {
    return axios
      .get(baseURL + country)
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          block.textContent = `${error.response.status} ${error.response.data.message} `;
        }
      });
  }
};
