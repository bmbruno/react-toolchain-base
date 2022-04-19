## Building a React Toolchain from Scratch

This repo provides a simple project pre-configured for React development. This uses a ground-up approach; that is, React, Webpack, and Babel are configured from scratch to support React development. This was based on React 18 at the time of creation.

## Getting Started

Follow these steps to use this project for learning purposes. All commands below should be run from the root of the project folder.

1. Ensure the following pre-reqs are met:
    * Node installed (16.14.2 or newer)
2. Run: `npm install` (installed configured Node modules - see `package.json`)
3. Run webpack to build/compile the solution: `npm webpack --config webpack.config.js`
    * Run this every time you want to build/compile your latest React code
4. Open `index.html` to view your React application

### Initial steps to create this project:

These are the steps used to create this solution from scratch:

_Pre-req_: Node (16.14.2 or newer)

1. Create project directory (then `cd` to new directory)
2. Install `react` and `react-dom`
    * ex: `npm install react react-dom`
3. Install bundler (webpack in this case) and the CLI for it
    * ex: `npm install webpack webpack-cli`
4. Create HTML starting point with React entry point (`index.html` or similar)
5. Create React starting point (`app.js` or similiar)
6. Create Webpack configuration
    * ex: `webpack.config.js` in root of solution
    * Here's [an example at this link](https://hashinteractive.com/blog/complete-guide-to-webpack-configuration-for-react/)
7. (Optional) Test webpack bundling
    * ex: `npx webpack --config webpack.config.js`
8. Reference compiled JS file in index HTML file
    * ex: `<script="dist/bundle.js"></script>`
9. Install Babel presets for React
    * ex: `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader`
10. Add Babel to Webpack configuration
    * [Example at this link](https://hashinteractive.com/blog/complete-guide-to-webpack-configuration-for-react/)
11. Write React and compile via webpack:
    * `npx webpack --config webpack.config.js`