# Event Manager

## Description
This is a SPA (Single Page Application) for creating and managing motorcycles. The application allows visitors to browse through the motorcycle catalog. Users may register with an email and a password which allows them to create their own motorcycles. Motorcycle authors can also edit or delete their own publications at any time.

## Technologies
- JavaScript
- lit-html
- Page.js
- Node.js

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/WhiteAngel145/Samurider
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To install the required dependencies and run the necessary scripts, use the following commands:

1. **Install dependencies**: This command will install all required dependencies specified in the `package.json` file.
    ```sh
    npm install
    ```

2. **Run tests**: This command will run the Mocha tests to ensure everything is working correctly.
    ```sh
    npm run test
    ```

3. **Start the application**: This command will start the http-server on `localhost:3000`.
    ```sh
    npm run start
    ```

4. **Start RESTful server**: This command will start the RESTful server.
    ```sh
    npm run rest
    ```

5. **Start development server**: This command will start the lite-server for development.
    ```sh
    npm run dev
    ```

6. Open a browser and go to `http://localhost:3000`.

## Features
- Browse the motorcycle catalog
- Create new motorcycles
- Edit existing motorcycles
- Delete motorcycles
- User registration and login

## Project Structure
- `src/`: Source code folder
    - `api`: Folder API
        - `requester.js`: REST service
    - `lib`: Folder library
        - `lit-html.js`: lit-html service
        - `page.js`: page service
    - `middlewares`: Folder middleware service
        - `navMiddleware.js`: Service navigation
    - `services/`: Service modules folder
        - `dataService.js`: Service for motorcycle operations
        - `userService.js`: Service for user authentication
    - `utils/`: Folder localStore users
        - `userUtils.js`: Control localStore/sessionStorage
    - `views/`: Pages folder
        - `create.js`: Page for create motorcycle
        - `delete.js`: Page for delete motorcycle
        - `details.js`: Page for motorcycle details
        - `edit.js`: Page for editing motorcycle
        - `events.js`: Page for displaying a list of motorcycles
        - `home.js`: Home page
        - `login.js`: Page for user login
        - `logout.js`: Page for user logout
        - `navigation.js`: Page showing navigation bar
        - `register.js`: Page for user registration
    - `App.js`: Main application

## Author
Add author information here.

## License
ISC

## Application Requirements

### Navigation Bar
Implement a NavBar for the app: 
- Navigation links should correctly change the current page (view). 
- All users can see the site logo that should be a link to the Home page as well as the Dashboard which should link to the Motorcycles page. 
- Guests (un-authenticated visitors) can see the links to the Login and Register and Search pages. 
- The logged-in user navbar should contain the links to the Add Motorcycle, Search pages and a link for the Logout action.

### Home Page
Implement a static Home page for the app using the structure for it from the given resources.  

### Logged-in
The included REST service comes with the following remade user accounts, which you may use for development:
- { "email": "peter@abv.bg", "password": "123456" }
- { "email": "john@abv.bg", "password": "123456" }
