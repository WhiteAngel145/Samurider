import { render, html } from "../lib/lit-html.js";
import { searchMotorcycles } from "../service/data.js";
import page from "../lib/page.js";

const template = (onSearch, data) => html`
    <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit=${onSearch} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4 id="result-heading">Results:</h4>
      <div class="search-result">
        ${data.length === 0
          ? html`<h2 class="no-avaliable">No result.</h2>`
          :data.map(item => card(item))}
      </div>
    </section>
`
const card = (data) => html`
                <div class="motorcycle">
                <img src=${data.imageUrl} alt="example1" />
                <h3 class="model">${data.model}</h3>
                <a class="details-btn" href="/details/${data._id}">More Info</a>
              </div>
`;

export async function searchView(ctx) {
  
  render(template(searchEventHandler, []));

  async function searchEventHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const model = formData.get('search');
  
    if (model === '') {
      return alert('Search field is empty!');
    }
  
    let data = await searchMotorcycles(model);
    render(template(searchEventHandler, data));
  }
}
