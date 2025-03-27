"use strict";
//Default parameters are parameters with a predefined value. If no argument is provided for the parameter, the default value is used.
function calculateArea(width, height = 10) {
    return width * height;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 20));
//   Optional Parameters Are undefined by Default
//   If an optional parameter is not provided, its value will be undefined.
function printMessage(message) {
    console.log(message); // Will log `undefined` if no value is provided
}
