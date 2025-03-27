"use strict";
// Class in OOP is a blueprint for creating objects
// Convention is Pascal case: Class name and each subsequent word in the class name should be capitalized
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const persons1 = new Persons("vinod", 12, ["reading", "studying"]);
console.log(persons1);
