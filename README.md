# front-end-interview-tests

This is a little widget that allows you to add locations from a list of cities and display the temperature respectively. The temperature data is fetched from openweathermap.org's free API via Ajax calls. The widget consists 3 Vue components, the root component index.vue, and two other components named box and widget. Using Webpack to bundle all scripts into one called bundle.js and loaded into index.html. It also uses Stylus CSS preprocessor for styling. This is the basic front-end stack we used on Kolibri as well as the coding idiom. Your task is to fix the issues stated below.

Tasks:
------

1. fix all widgets displaying the same data issue (reference: https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function)

2. fix deleting the correct widget issue (reference: https://vuejs.org/v2/guide/list.html)


How to set up
-------------

* 1st: run `npm install` from the project root directory

* 2nd: run `webpack-dev-server --progress --colors`

* 3rd: open your browser at `localhost:8080`

