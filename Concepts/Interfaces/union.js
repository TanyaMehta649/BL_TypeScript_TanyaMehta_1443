"use strict";
// A union type allows a value to be one of several types. It is denoted using the pipe (|) operator.
let values;
values = "hello";
values = 123;
function printId(id) {
    console.log(`${id}`);
}
printId(123);
printId(56);
const employee1 = {
    name: "Vinod",
    age: 29,
};
const employee2 = {
    empId: 1111,
    department: "Engineering",
};
// Intersection Type: Must satisfy both Person and Employee
