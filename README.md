# G1

Medical Transparency

Members: Luke, Philip, Emma, Kathryn, Michael, Mason

Project Description: The goal of this project is to provide a proof-of-concept web application that scrapes price data from hospital websites regarding procedures and treatments, and list them in a user-friendly and extendable database. The scope of the collected data will be all hospitals and clinics in the near Bozeman area that have chosen to disclose their pricing information. If time and resources allow, we would like to extend that scope to the entirety of Montana.

User Story: As a (person seeking medical treatment from a hospital), I want to (find the price of said medical procedure/medication at any hospital in Montana), so I can (make a well-informed financial decision before I move forward).

Product Backlog, Spring Backlog and Burnout Chart: https://docs.google.com/spreadsheets/d/18L7DhmbzjlZekVTodxcfyW0uHQH5qRqkhYV5J1QDs7Y/edit?usp=sharing

# Medical-Transparency

    This project was created to provide clients with a transparent overview of pricing of medical services at Hospitals in Montana.
    In order to get prices, we are scraping data using python scripts from Hospital websites. This data will then be transfered into
    our mongo database where it can be utilized by our web application. The web application was built using the react technology for front end and nodejs, in combination with express for backend services and api.
    This application will help end-users make more informed financial decisions when it comes to getting medical treatment.

# Documentation for USER

    Obtain	the	source	code for latest Stable version (main Branch):
    https://github.com/mroduin44/Medical-Transparency

    Please email: mroduin44@gmail.com to be added as a collaborator.

    Run the application in a local dev environment by following these steps.

    Navigate into Medical-Tranparency Folder in the Terminal: use cd Medical-Transparency

    In the Terminal:

    Setup React:
    1. Install dependencies (see package-lock.json): npm install
    2. Build: npm run build
    3. Run Frontend on localhost: npm run start
    4. Visit localhost to see changes.

    Set up Server:

    Please See Sprint_0.pdf for more info on UI, design choices, and workflow.
    Our website will behave as a Single Page Application (SPA).
    The way in which the user interacts with the web app

    Reporting Bugs:
    Please Report and bugs to philip@meiers.in
    You can track any active bugs in our Jira Repo in the product Backlog.

    https://pgehde.atlassian.net/jira/software/projects/MT/boards/1

    Please email philip@meiers.in for access.

    When reporting a bug, please use the following resources as guidelines:
        Oracle, Mozilla, Ximian, Tatham,Raymond.

# Documentation for Developer

    #Tech Stack
    Frontend: React
    Backend: NodeJS
    Database: MongoDB

    obtain	the	source	code for latest Stable version (main Branch):
    https://github.com/mroduin44/Medical-Transparency

    Please email: mroduin44@gmail.com to be added as a collaborator.


    directory structure: We have seperated front and backend in two different folders titled 'client' and 'server'.
    Please note that dependencies will have to be installed for both seperately.

    Setup React:
    1. Install dependencies (see package-lock.json): npm install
    2. Build: npm run build
    3. Run Frontend on localhost: npm run start
    4. Visit localhost to see changes.

    Set up Server:

    Please See Sprint_0.pdf for more info on UI, design choices, and workflow.
    Our website will behave as a Single Page Application (SPA).
    The way in which the user interacts with the web app

# React Documentation 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
