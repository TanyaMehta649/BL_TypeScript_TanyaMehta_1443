"use strict";
// Defining the person object with nested properties
const persons = {
    name: 'Vinod',
    age: 27,
    isStudent: true,
    addressa: {
        city: "Pune",
        country: 'India'
    }
};
console.log(persons.addressa.country);
const restaurant = {
    name: "Haldiram",
    noofemployees: 100,
    foodavavailable: {
        chinese: true,
        northindian: false,
    },
};
console.log(restaurant);
