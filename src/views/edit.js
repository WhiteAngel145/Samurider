import { render, html } from "../lib/lit-html.js";
import { editMotorcycle, getMotorcycleById } from "../service/data.js";
import page from "../lib/page.js";

const template = (data, onEdit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" value=${data.model}/>
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" value=${data.imageUrl}/>
            <input type="number" name="year" id="year" placeholder="Year" value=${data.year}/>
            <input type="number" name="mileage" id="mileage" placeholder="mileage" value=${data.mileage}/>
            <input type="number" name="contact" id="contact" placeholder="contact" value=${data.contact}/>
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50" >${data.about}</textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
      </div>
    </section>
`;

export async function editView(ctx) {
  const motorcycleId = ctx.params.id;
  const data = await getMotorcycleById(motorcycleId);
	render(template(data, editEventHandler.bind(undefined, motorcycleId)));
}

async function editEventHandler(motorcycleId, event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (Object.values(data).some(value => value === '')) {
    return alert('All fields are required!');
  }

  await editMotorcycle(motorcycleId, data);
  page.redirect(`/details/${motorcycleId}`);
}