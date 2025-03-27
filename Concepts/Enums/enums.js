"use strict";
// Enums are commonly used when you want to represent a set of related values and choose one value from multiple options.
// In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0.
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
console.log(Days[1]);
var NumericEnum;
(function (NumericEnum) {
    NumericEnum[NumericEnum["First"] = 0] = "First";
    NumericEnum[NumericEnum["Second"] = 1] = "Second";
    NumericEnum[NumericEnum["Third"] = 2] = "Third";
})(NumericEnum || (NumericEnum = {}));
console.log(NumericEnum.First);
console.log(NumericEnum[0]);
var StringEnum;
(function (StringEnum) {
    StringEnum["First"] = "First";
    StringEnum["Second"] = "Second";
    StringEnum["Third"] = "THIRD";
})(StringEnum || (StringEnum = {}));
console.log(StringEnum.First);
// Reverse Mapping (for Numeric Enums): Numeric enums allow reverse mapping, meaning you can access a key by its value:
var ReverseEnum;
(function (ReverseEnum) {
    ReverseEnum[ReverseEnum["A"] = 1] = "A";
    ReverseEnum[ReverseEnum["B"] = 2] = "B";
})(ReverseEnum || (ReverseEnum = {}));
console.log(ReverseEnum[1]);
console.log(ReverseEnum.A);
