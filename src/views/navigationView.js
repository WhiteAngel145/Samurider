import { baseRender, html } from "../lib/lit-html.js";
const root = document.querySelector('#wrapper header');
const template = () => html`
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>
    <nav>
      <div>
        <a href="/dashboard">Motorcycles</a>
        <a href="/search">Search</a>
      </div>
      <!-- Logged-in users -->
      <div class="user">
        <a href="/create">Add Motorcycle</a>
        <a href="/logout">Logout</a>
      </div>
      <!-- Guest users -->
      <div class="guest">
        <a href="login">Login</a>
        <a href="register">Register</a>
      </div>
    </nav>
`;

export function navigationView() {
	baseRender(template(), root);
}