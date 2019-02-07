# React User Authentication

[![Build status](https://ci.appveyor.com/api/projects/status/oeg89gldjylp73qc?svg=true)](https://ci.appveyor.com/project/daniel-234/react-user-authentication)
[![Build Status](https://travis-ci.com/daniel-234/react-user-authentication.svg?branch=master)](https://travis-ci.com/daniel-234/react-user-authentication)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

This is a side project to create a user authentication application with React. 
We will rebuild [a project](https://github.com/chenkie/react-user-authentication) developed by Ryan Chenkie for a [course](https://frontendmasters.com/courses/secure-auth-jwt/) on JWT on Frontend Masters. 
This frontend application will rely on an API built by following that same course, which can be found in [this repository](https://github.com/daniel-234/user-authentication-api). 

## About this project

To build the application I followed the [wonderful course](https://frontendmasters.com/courses/complete-react-v4/) taught by Brian Holt at Frontend Masters as a complete introduction to React and its ecosystem. You can find his course notes [here](https://btholt.github.io/complete-intro-to-react-v4/).

Following that track, this app has been built starting from the simplest React application possible. 
Its first working version (check the commit after the initial one) only uses two script tags to load the React and the ReactDOM libraries (their development versions) from a CDN. 

All the tools have been configured manually, instead of using a black box like `create-react-app`.

## Getting Started

To run this application, you need to have Node.js installed. If you don't have it, please go to the [Node.js](https://nodejs.org/en/) website, download and install it. 

Then you can install this application, by (forking and) downloading it and then running the command `npm install` from your terminal. 

Run the app by using the script command `npm run start:dev` from the command line and open your browser at `localhost:8080` to see it live. 
Watch Webpack live update your output without you having to reload your browser window, while in development, after we added the Hot Module Replacement feature (and its plugins built for React). 

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Reach Router](https://github.com/reach/router) - Next generation routing for React
- [Bootstrap 4](http://getbootstrap.com/) - Frontend component library
- [reactstrap](https://reactstrap.github.io/) - Easy to use React Bootstrap 4 components
- [Jest](https://jestjs.io/en/) - Delightful JavaScript Testing
- [Webpack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications

## Author

- **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

This application has been built based on these repositories: [React User Authentication](https://github.com/chenkie/react-user-authentication), [Complete Intro to React v4](https://btholt.github.io/complete-intro-to-react-v4/) and [Testing Workshop](https://github.com/kentcdodds/testing-workshop).
The full courses based on these repositories can be found on [Frontend Masters](https://frontendmasters.com/).

### Styling

This application uses Bootstrap 4 as a library for custom components. 
Consider switching or using [Material-UI](https://material-ui.com/) to build React components that implement Google's Material Design.

### Notes on ESLint rules

The ESLint configuration rules used in this project are the ones suggested by Brian Holt in his workshop notes: [ESLint and React configuration](https://btholt.github.io/complete-intro-to-react-v4/jsx/#eslint--react). 

### Notes on Webpack (with focus on HMR and routing issues)

With the addition of a configuration file for Webpack, there's no need to specify manually an entry point or an output on the command line, as we already did that in that configuration file. 

#### Live reloading and relative paths

This project uses Webpack development server, that conveniently provides live reloading. It serves its assets from the configured public path property, so a minor refactoring has been done in commit `2b8c7a9653`. 
That little modification in `index.html` let us load the `main.js` file from that folder, instead of doing it from the home page.
Errors in this configuration may lead to several issues (see [Webpack and HMR issues](#webpack-and-HMR-issues) to read more).  
The bundled file referenced inside the home page now has a relative path that points to the folder where the development server accesses the webpack assets. 

#### Protecting resources (with scope)

Part of this small project, built to learn how to deal with authentication, consists on working on protecting routes. 
Assigning priviledges to certain users would require a management service, that is beyond the scope of this small project. So I've created an 'augmented' signup method that you can use to play with the application with admin credentials.
As a user with 'admin' credentials, you can add instructors to the database. 
If you want to register a user with admin credentials, just uncomment the 'signupAdmin' method in the 'login' component and comment the 'signup' method (and viceversa to create a normal user). 

### Continuous Integration

This application uses two services for Continuous Integration:

 - [Travis](https://travis-ci.com/daniel-234/react-user-authentication)
 - [AppVeyor](https://ci.appveyor.com/project/daniel-234/user-authentication-api)

## License

This project is intended for learning purposes only. Much of it will reproduce code found in the repositories listed in [Notes](#notes), so if you intend to use it, please refer to their original licenses and give appropriate credit to the respective authors.

## Acknowledgments

- [Brian Holt - Complete Intro to React - older versions](https://btholt.github.io/complete-intro-to-react/)
- [Mozilla Developers Playgroud - CSS grid](https://mozilladevelopers.github.io/playground/css-grid)
- [Rachel Andrews - Grid by Example](https://gridbyexample.com/)
- [CSS Tricks - A complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [39Digits - Configure Prettier and ESLint in Visual Studio Code](https://www.39digits.com/configure-prettier-and-eslint-in-visual-studio-code/)
- [39Digits - Automatically format your JavaScript commits using Prettier, Husky and lint-staged](https://www.39digits.com/automatically-format-your-javascript-commits-using-prettier-and-husky/)
- [Dan Abramov - issue in ESLint: React is defined but never used](https://github.com/babel/babel-eslint/issues/6)
- [Dan Abramov on Medium - Lint like it's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48) - 
  (Use a preset to have React specific linting rules for ESLint). 
  
  #### Webpack and HMR issues

  Useful links for issues related to Webpack configuration (especially when it's configured to work with a dev server or on hot module reloading) and a router, be it React Router or Reach Router.

  The first link helps to point to a solution of the issue of not being able to navigate to any route different from the serving URL ("/" path).
- [Stackoverflow - React Router V4 - cannot GET URL](https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url)

  The second link is an explanation of how to fix the problem, in more detail. 
- [Tyler McGinnis - React Router - cannot get URL refresh](https://tylermcginnis.com/react-router-cannot-get-url-refresh/)

  The third link points to a problem that may arise if you don't configure your script files to be served from a relative file (see [Live reloading and relative paths](#live-reloading-and-relative-paths) above). 
- [Stackoverflow - Unexpected token error in React Router component](https://stackoverflow.com/questions/29718481/unexpected-token-error-in-react-router-component)

  #### Define private data in JS

- [Stackoverflow - How to define private data with behavior delegation in JS](https://stackoverflow.com/questions/42611606/how-to-define-private-variables-with-behavior-delegation-oloo-in-js)
- [Medium - Functional Mixins - Composing software](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c)

  #### About buttons and anchor tags

- [Stackoverflow - Wrapping (properly) a React Router Link in an HTML button](https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button)
- [Stackoverflow - How to remove the default link color of the HTML hyperlink <a> tag](https://stackoverflow.com/questions/6722467/how-to-remove-the-default-link-color-of-the-html-hyperlink-a-tag)
- [Stackoverflow - How to remove the underline for anchor links](https://stackoverflow.com/questions/2041388/how-to-remove-the-underline-for-anchorslinks/29986654)

- [Stackoverflow - JavaScript new Date(0)](https://stackoverflow.com/questions/2604708/javascript-new-date0-class-shows-16-hours)

  #### Node, Webpack (or a bundler in general), paths to CSS files and MIME type checker activated
- [Stackoverflow - Stylesheet not loaded because of MIME-type](https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type)

  #### Web APIs
- [MDN Fetch API -> Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Response Body -> Body.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- [MDN Response Body -> Body.text()](https://developer.mozilla.org/en-US/docs/Web/API/Body/text)

  #### Fetch and Promises
- [Stackoverflow - How do I access previous Promise results in a then chain](https://stackoverflow.com/questions/28250680/how-do-i-access-previous-promise-results-in-a-then-chain/28250697#28250697)
- [Stackoverflow - What is the correct terminology for JavaScript Promises](https://stackoverflow.com/questions/29268569/what-is-the-correct-terminology-for-javascript-promises/29269515#29269515)
- [Stackoverflow - How to return from a Promise catch-then block](https://stackoverflow.com/questions/32032588/how-to-return-from-a-promises-catch-then-block/32049994)
- [Stackoverflow - Why does JSON return a Promise](https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise)