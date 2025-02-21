// TODO delete this view

import { html, render } from "../lib/lit-html.js";

const template = () => html`
	<section id="home">
      <h1>
        Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
      <img
        src="./images/motorcycle.png"
        alt="home"
      />
    </section>
`;

export function homeView(ctx) {
	render(template());
}