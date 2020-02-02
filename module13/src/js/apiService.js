const baseURL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=3";
const KEY = "15109703-4df3afa39634f93d9eb19fc69";

export default {
  page: 1,
  incrementPage() {
    this.page += 1;
  },
  query: "",
  set setQuery(string) {
    this.query = string;
  },
  resetPage() {
    this.page = 1;
  },

  async fetchCountries() {
    const params = `&q=${this.query}` + `&page=${this.page}` + `&key=${KEY}`;
    try {
      const request = await fetch(baseURL + params);
      this.incrementPage();
      const response = await request.json();
      return response.hits;
    } catch (err) {
      throw err;
    }
  }
};
