import { render, html } from "../lib/lit-html.js";
import { getMotorcycleById } from "../service/data.js";

const template = (data) => html`
    <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt=${data.model} />
        <p id="details-title">${data.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="year">Year: ${data.year}</p>
            <p class="mileage">Mileage: ${data.mileage} km.</p>
            <p class="contact">Contact Number: ${data.contact}</p>
               <p id = "motorcycle-description">${data.about}</p>
          </div>
           <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="/delete/${data._id}" id="delete-btn">Delete</a>
          </div>
        </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const data = await getMotorcycleById(id);
	render(template(data));
}