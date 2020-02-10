const baseURL = "https://restcountries.eu/rest/v2/name/";

const block = document.querySelector(".countries__info");
export default {
  fetchCountries(country) {
    const requestCountries = `${country}`;

    return fetch(baseURL + requestCountries)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          block.textContent = "404 NOT FOUND";
        }
      })
      .catch(error => console.log(error));
  }
};
