import page from "./lib/page.js";
import { navigationMiddleware } from "./middleware/navMiddleware.js";

import { homeView } from "./views/home.js";
import { dashboardView } from "./views/dashboard.js";
import { registerView } from "./views/register.js";
import { loginView } from "./views/login.js";
import { createView } from "./views/create.js";
import { searchView } from "./views/search.js";
import { detailsView } from "./views/details.js";
import { logoutView } from "./views/logout.js";
import { editView } from "./views/edit.js";
import { deleteView } from "./views/delete.js";

page(navigationMiddleware)
page("/", homeView);
page("/dashboard", dashboardView);
page("/register", registerView);
page("/login", loginView);
page("/logout", logoutView);
page("/create", createView);
page("/search", searchView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/delete/:id", deleteView);

page();