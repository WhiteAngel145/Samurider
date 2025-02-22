import { render, html } from "../lib/lit-html.js";
import { createMotorcycle } from "../service/data.js";
import page from "../lib/page.js";

const template = (onCreate) => html`
    <section id="create">
      <h2>Add Motorcycle</h2>
      <div class="form">
        <h2>Add Motorcycle</h2>
        <form @submit=${onCreate} class="create-form">
          <input type="text" name="model" id="model" placeholder="Model" />
          <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
          <input type="number" name="year" id="year" placeholder="Year" />
          <input type="number" name="mileage" id="mileage" placeholder="mileage" />
          <input type="text" name="contact" id="contact" placeholder="contact" />
          <textarea id="about" name="about" placeholder="about" rows="10" cols="50" ></textarea>
          <button type="submit">Add Motorcycle</button>
        </form>
      </div>
    </section>
`;

export async function createView() {
	render(template(createEventHandler));
}

async function createEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (Object.values(data).some(value => value === '')) {
    return alert('All fields are required!');
  }

  await createMotorcycle(data);
  page.redirect('/dashboard');
}