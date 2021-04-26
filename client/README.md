The purpose of this project is to have a cohesive bootstraped React client on which to extend and utilize for any application.

## Features
1. React (ver 16, waiting on Enzyme to upgrade to 17)
    * Code splitting example by route
2. Redux
    * Actions
    * Reducers
    * Thunks (allowing for async calls / processing)
3. [I18next - internationalization-framework](https://www.i18next.com/) - English / German examples
4. [Jest Tests](https://jestjs.io/) / [Enzyme](https://enzymejs.github.io/enzyme/) (waiting on [issue](https://github.com/enzymejs/enzyme/issues/2429) to resolve before upgrade to 17 )
5. [Webpack Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches Jest testing with coverage option<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook-build`

Builds [Storybook](https://storybook.js.org/) to allow for component level visualizations and development, without reloading the entire<br />
application and forcing certain user flows to access it.

### `npm run storybook`

Runs [Storybook](https://storybook.js.org/) and allows [access to a visual setup](http://localhost:6006/) of the React components while you develop.

### `npm run analyze`

Builds a visual representation of the production level webpack that is created, and analyze the sizes of each included module.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# References

### React / Jest / Enzyme
https://itnext.io/how-to-unit-test-in-react-72e911e2b8d1
https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).