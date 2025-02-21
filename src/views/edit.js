import { render, html } from "../lib/lit-html.js";

const template = () => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form class="edit-form">
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Model"
            />
            <input
              type="text"
              name="imageUrl"
              id="moto-image"
              placeholder="Moto Image"
            />
            <input
            type="number"
            name="year"
            id="year"
            placeholder="Year"
          />
          <input
          type="number"
          name="mileage"
          id="mileage"
          placeholder="mileage"
        />
        <input
          type="number"
          name="contact"
          id="contact"
          placeholder="contact"
        />
          <textarea
            id="about"
            name="about"
            placeholder="about"
            rows="10"
            cols="50"
          ></textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
      </div>
    </section>
`;

export async function editView() {
	render(template());
}