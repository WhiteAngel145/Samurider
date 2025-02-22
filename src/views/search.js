import { render, html } from "../lib/lit-html.js";
import { searchMotorcycles } from "../service/data.js";
import page from "../lib/page.js";

const template = (data, onSearch) => html`
    <!-- Search page -->
    <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form">
        <input type="text" name="search" id="search-input" />
        <button @submit=${onSearch} class="button-list">Search</button>
      </form>
    </div>
    <h4 id="result-heading">Results:</h4>
      <div class="search-result">
        ${data.length === 0
          ? html`<h2 class="no-avaliable">No result.</h2>`
          :data.map(
            html`
              <div class="motorcycle">
                <img src="./images/Honda Hornet.png" alt="example1" />
                <h3 class="model">Honda Hornet</h3>
                <a class="details-btn" href="">More Info</a>
              </div>
            `)}
      </div>
    </section>
`

export async function searchView(ctx) {
  let data = [];
  
  render(template(data, searchEventHandler));
}

async function searchEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const model = formData.get('search');

  if (model === '') {
    return alert('Search field is empty!');
  }

  let data = await searchMotorcycles(model);
  render(template(data, searchEventHandler));
}