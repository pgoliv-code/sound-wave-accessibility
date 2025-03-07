<<<<<<< HEAD
# sound-wave
=======
# Soundwave App

Soundwave is a web application that allows users to discover new music, explore albums, and stay up-to-date with the latest releases.

## Technologies Used
- **React** with Vite
- **React Router** for navigation
- **CSS Modules** for styling
- **Cypress** for automated testing

## Installation and Setup
Follow these steps to install and run the project on your local environment:

### 1. Clone the repository
sh
git clone https://github.com/iespin/soundwave.git

### 2. Install dependencies
sh
npm install

### 3. Run the development server
sh
npm run dev

The project will be available at http://localhost:5173 by default.

## Project Structure
── cypress/       # Automated tests with Cypress
/src
── application/   # Route configuration
   ── Router.jsx  # Routing configuration
── assets/        # Images and graphic resources
── components/    # Reusable components
   ── button/     # Reusable button
   ── footer/     # Footer
   ── navbar/     # Navigation bar
── pages/         # Main pages
   ── discover/   # Discover page
   ── home/       # Home page
   ── join/       # Sign up page
── App.jsx        # Main component of the application
── main.jsx       # Application entry point
── index.css      # Global styles

## Main Routes
| Route        | Description |
|------------  |-------------|
| /            | Main page |
| /discover    | Discover new music |
| /join        | Join the community |

## Cypress Testing
Automated tests have been implemented using **Cypress** to ensure the application's stability. The tests are located in the tests/ folder.

### Running Cypress Tests
To open Cypress in interactive mode:
sh
npx cypress open

To run the tests in terminal mode:
sh
npx cypress run

## Error Handling
Error handling in the application focuses on form validation:
- **Sign-up form validation**: It checks that the required fields are complete and valid before allowing submission.
- **Dynamic error messages**: Custom error messages are displayed if the entered data does not meet the requirements.

## Accessibility
To improve accessibility, the application includes:
- Use of alt tags for images.
- Proper HTML semantics for screen readers.
- High contrast in CSS styles.

## Deployment
To build the application for production, use:
sh
npm run build

This will generate optimized files in the dist/ folder.

## Contribution
If you wish to contribute to the project, please:
1. Fork the repository
2. Create a new branch (git checkout -b new-feature)
3. Make your changes and commit (git commit -m 'Add new feature')
4. Push the changes (git push origin new-feature)
5. Open a Pull Request

## License
This project is licensed under the MIT License.
>>>>>>> dev
