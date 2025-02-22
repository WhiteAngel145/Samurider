import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const root = document.querySelector('#wrapper header');

const template = (user) => html`
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>
    <nav>
      <div>
        <a href="/dashboard">Motorcycles</a>
        <a href="/search">Search</a>
      </div>
      ${user
        ? html`
          <div class="user">
            <a href="/create">Add Motorcycle</a>
            <a href="/logout">Logout</a>
          </div>
        `
        : html`
          <div class="guest">
            <a href="login">Login</a>
            <a href="register">Register</a>
          </div>
        `
      }
    </nav>
`;

export function navigationView() {
  const user = getUserData();
	baseRender(template(user), root);
}