"use strict";
// Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically deduce the type of a variable, parameter, or return value based on its initial value or context, without explicitly specifying the type.
let firstname = "tanya";
let myage = 22;
// name is string and age is number
function work(message = "wow") {
    console.log(message);
}
// message is inferred as string
// type annotatation is jaha hum type define krte h
// use type inference for simple cases where the assigned value clearly indicates the intended type
