# Neighborhood Map
This project is React, Google Map, Foursquare and bootstrap 4 powered single page application.

## Project Folder Structure
This is app folder structure
```
reactnd-neighborhood-map/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    FourSquareAPI.js
    MapView.js
    SearchList.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## React Component
In order to make this project work, several components were created
1. `SearchList.js` this is for filter search resualts, and handle user click search result.
2. `MapView.js` this is google map component, It's main functionality is for handle user click
and show search results
3. `FourSquareAPI.js` this is not a component, but it handle data from foursquare server.

## How to run this project
1. Open the terminal
2. `cd` Into the app directory
3. type `npm install` or `yarn install` to install app dependences,
   either commond is fine, depending on your preference.
4. type `npm star` or `yarn star`, to run app with develop mode,
   then you can type "http://localhost:3000" in your browser to use the app.
5. enjoy!

