import { render,html } from "../lib/lit-html.js";
import { getAllMotorcycles } from "../service/data.js";

const template = (motorcycle) => html`
	<!-- Dashboard page -->
	<h2>Available Motorcycles</h2>
	<section id="dashboard">
	${motorcycle.length > 0
			? motorcycle.map(card)
			: html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
		}
	</section>

`;
const card = (data) => html`
	  <div class="motorcycle">
	    <img src=${data.imageUrl} alt=${data.model} />
	    <h3 class="model">${data.model}</h3>
	    <p class="year">Year: ${data.year}</p>
	    <p class="mileage">Mileage: ${data.mileage} km.</p>
	    <p class="contact">Contact Number: ${data.contact}</p>
	    <a class="details-btn" href="/details/${data._id}">More Info</a>
	  </div>
`;
export async function dashboardView() {
	const motorcycles = await getAllMotorcycles();
	render(template(motorcycles));
}