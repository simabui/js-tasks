import { refs } from "./handle-search";

const baseURL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12";
const KEY = "15109703-4df3afa39634f93d9eb19fc69";

export default {
  page: 1,
  incrementPage() {
    this.page += 1;
  },

  async fetchCountries(query) {
    const params = `&q=${query}` + `&page=${this.page}` + `&key=${KEY}`;
    try {
      const request = await fetch(baseURL + params);

      const response = await request.json();
      return response.hits;
    } catch (err) {
      throw err;
    }
  }
};
