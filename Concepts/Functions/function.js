"use strict";
function greeting(name, id) {
    console.log(`welcome ${name} and id is ${id}`);
}
greeting("vinod", 1);
//arrow functions
const greets = (lname, id) => {
    console.log(`welcome ${lname} and id is ${id}`);
};
greets("ridhi", 2);
const greet1 = (lname, id) => {
    return `welcome ${lname} and id is ${id}`;
};
greets("ridhi", 2);
//to specify the return type of a function we can use the semicolon : followed by the desired type
function logMessage(message) {
    console.log(message);
}
const subtraction = (x, y) => x - y;
console.log(subtraction(12, 8));
