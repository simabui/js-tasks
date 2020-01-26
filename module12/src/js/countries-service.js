const baseURL = "https://restcountries.eu/rest/v2/name/";

export default {
  fetchCountries(country) {
    const requestCountries = `${country}`;

    return fetch(baseURL + requestCountries).then(response => response.json());
  }
};
