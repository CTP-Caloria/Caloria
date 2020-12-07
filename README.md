# Caloría

Caloría is a calorie counter and recipe finder for alternatives to healthy eating.
Our app is deployed [here](https://caloria-ctp.herokuapp.com/).

## Design

Wireframe and prototype [here](https://www.figma.com/file/jSym1J7RTKrEVnEE3KCx2X/Wireframe).

## Installation

Install dependencies using the [npm package manager](https://docs.npmjs.com/cli/v6/commands/npm-install) in the _main_ folder and _client_ folder:

```bash
npm install
```

```bash
cd client
npm install
```

Our app uses [PostgreSQL](https://www.postgresql.org/download/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Stack

*API*

- express.js
- sequelize.js

*React Client*

- Built using `create-react-app` and configured to work with the API.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router

## Usage
For **local development** you will need two terminals open, one for the API-backend and another for the react-client.

```bash
cd client
npm start
```

```bash
cd api
npm run dev
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.
