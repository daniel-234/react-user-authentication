# React User Authentication

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a side project to create a user authentication application with React. 
We will rebuild [a project](https://github.com/chenkie/react-user-authentication) developed by Ryan Chenkie for a [course](https://frontendmasters.com/courses/secure-auth-jwt/) on JWT on Frontend Masters. 
This frontend application will rely on an API built by following that same course, which can be found in [this repository](https://github.com/daniel-234/user-authentication-api). 

## About this project

To build this project I will follow the [wonderful course](https://frontendmasters.com/courses/complete-react-v4/) taught by Brian Holt at Frontend Masters as a complete introduction to React and its ecosystem. You can find his course notes [here](https://btholt.github.io/complete-intro-to-react-v4/).

Although it would have been easier to build this application by using `create-react-app`, I chose to follow Brian's track and try to understand the tools I am using and know what each of them does. This way it will be easier to manipulate them and get the best performance from them. 

This application has been built from the ground up, starting from the simplest React application possible. 
In its first version (check the commit after the initial one) it uses two script tags to load the React and the ReactDOM libraries (their development versions) from a CDN. 

## Getting Started

To run this application, you need to have Node.js installed. If you don't have it, please go to the [Node.js](https://nodejs.org/en/) website, download and install it. To install this application you can (fork and) download it and then run the command `npm install` from your terminal. 
<del>After the install process has finished, run the command `npx webpack src/App.js` from your terminal. This will bundle your files and translate the ES6 imports into ES5 syntax, that can be run by all browser engines.</del>

<del>Now you can  open the file `index.html` from your browser window. There's no other things to do at this point.</del>

With the addition of a configuration file for Webpack, there's no need to specify manually an entry point or an output on the command line, as we already did that in that config file. 
At this point I've added the Webpack development server, that conveniently provides live reloading. It serves its assets from the configured public path property, so a minor refactoring has been done on `index.html` to load `main.js` file from that folder, instead of doing it from the home page.  
The bundled file referenced inside the home page now has a relative path that points to the folder where the development server accesses the webpack assets. That made the two script commands `build` and `watch` not useful anymore, as we had to manually open the `index.html`. So they were removed in this commit. 

To run this app, type `npm run webpack-dev-server` from the command line and open your browser at `localhost:8080` to see it live.  

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## Author

- **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

This application has been built based on these repositories: [React User Authentication](https://github.com/chenkie/react-user-authentication), [Complete Intro to React v4](https://btholt.github.io/complete-intro-to-react-v4/) and [Testing Workshop](https://github.com/kentcdodds/testing-workshop).
The full courses based on these repositories can be found on [Frontend Masters](https://frontendmasters.com/).

## License

This project is intended for learning purposes only. Much of it will reproduce code found in the repositories listed in [Notes](#notes), so if you intend to use it, please refer to their original licenses and give appropriate credit to the respective authors.

## Acknowledgments

- [Mozilla Developers Playgroud - CSS grid](https://mozilladevelopers.github.io/playground/css-grid)
- [Rachel Andrews - Grid by Example](https://gridbyexample.com/)
- [CSS Tricks - A complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [39Digits - Configure Prettier and ESLint in Visual Studio Code](https://www.39digits.com/configure-prettier-and-eslint-in-visual-studio-code/)
- [39Digits - Automatically format your JavaScript commits using Prettier, Husky and lint-staged](https://www.39digits.com/automatically-format-your-javascript-commits-using-prettier-and-husky/)
- [Dan Abramov - issue in ESLint: React is defined but never used](https://github.com/babel/babel-eslint/issues/6)
- [Dan Abramov on Medium - Lint like it's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48) - 
  (Use a preset to have React specific linting rules for ESLint). 