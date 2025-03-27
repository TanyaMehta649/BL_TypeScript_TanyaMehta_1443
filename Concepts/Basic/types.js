"use strict";
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// Explicit - writing out the type:
//string no boolean
let firstName = "Dylan";
let age = 23;
let isStudent = true;
function greet() {
    console.log("hello");
}
//void- Represents the absence of a value, typically used as the return type for functions that do not return anything.
//null-Represents an intentional absence of any object value. It is a primitive value in TypeScript.
let value = null;
//undefined-Represents a variable that has been declared but not assigned a value.
let lastname = undefined;
//any-Represents any type of value. It allows for dynamic typing, but should be avoided when possible for type safety.
let data = "Hello";
data = 10;
//objects
let personobj = { name: "Dylan", age: 25 };
//Tuple
// Represents a fixed-size, ordered collection of elements where each element can have a different type.
let tuple = ["Alice", 30];
// Implicit - TypeScript will "guess" the type, based on the assigned value:
let username = "Dylan";
let numbers = [1, 2, 3];
let person = {
    name: "Tanya",
    age: 22,
};
