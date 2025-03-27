"use strict";
//any-No type checking is done on values with type any,You can assign any value to a variable of type any.
let datas = "Hello, TypeScript!";
data = 42;
data = true;
console.log(data.length);
//The unknown type is similar to any in that it can hold any type of value, but it is safer than any because you can’t perform operations on a variable of type unknown without first checking its type.
let data1 = "Hello, TypeScript!";
data = 42; // No error, can change type to number
data = true; // No error, can change type to boolean
