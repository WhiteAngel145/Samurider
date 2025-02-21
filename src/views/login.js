import { render, html } from "../lib/lit-html.js";
import { login } from "../service/user.js";
import page from "../lib/page.js";

const template = (onLogin) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </section>

`;

export async function loginView() {
	render(template(loginEventHandler));
}

async function loginEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (data.email === '' || data.password === '') {
    return alert('All fields are required!');
  }

  await login({ email: data.email, password: data.password });
  page.redirect('/');
}