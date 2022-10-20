# Restaurant Page

## Live Preview
[Restaurant Page](https://dak79.github.io/odin-restaurant-page/)

## Description
This project is part of [The Odin Project - Full Stack JavaScript Path](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page). The main goals are configuring Webpack, using Npm and a code design with ES6 Modules.
As content tha page is around a Soup Restaurant which does not exist.

## Tecnologies
* HTML
* CSS
* JavaScript
* Npm
* Webpack

## Assignement
* Run npm init in your project directory to generate a package.json file.

* Run npm install webpack webpack-cli --save-dev to install webpack to the node_modules directory of your project.

* Create a src and dist directory with the following contents:
    * an index.js file in src;
    * an index.html file in dist. 

* Create a webpack.config.js file that looks just like our file from the tutorial.

* Set up an HTML skeleton inside of dist/index.html with single `<div id="content">`.

* Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

* Now remove those elements from the HTML (so leave only the `<html>`, `<body>`, and `<div id="content">` tags) and instead create them by using JavaScript only

* Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages.

* Put the contents of each ‘tab’ inside of its own module. 

* Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
