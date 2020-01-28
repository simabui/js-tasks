const baseURL = "https://restcountries.eu/rest/v2/name/";

export default {
  fetchCountries(country) {
    const requestCountries = `${country}`;

    return fetch(baseURL + requestCountries)
      .then(response => {
        if (response.status !== 404) {
          return response.json();
        } else {
          document.querySelector(".countries__list").textContent =
            "404 NOT FOUND";
        }
      })
      .catch(error => console.log(error));
  }
};
