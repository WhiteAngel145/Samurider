import { render, html } from "../lib/lit-html.js";

const template = () => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form class="register-form">
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
      </div>
    </section>
`;

export async function registerView() {
	render(template());
}