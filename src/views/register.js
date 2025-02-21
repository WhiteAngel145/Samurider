import { render, html } from "../lib/lit-html.js";
import { register } from "../service/user.js";
import page from "../lib/page.js";

const template = (onLogin) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${onLogin} class="register-form">
          <input type="text" name="email" id="register-email" placeholder="email" />
          <input type="password" name="password" id="register-password" placeholder="password" />
          <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section>
`;

export async function registerView() {
	render(template(loginEventHandler));
}

async function loginEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  
  if (data.email === '' || data.password === '' || data['re-password'] !== data.password) {
    return alert('All fields are required!');
  }

  await register({ email: data.email, password: data.password});
  page.redirect('/');

}