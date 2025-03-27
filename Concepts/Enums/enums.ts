// Enums are commonly used when you want to represent a set of related values and choose one value from multiple options.
// In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0.

enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Days.Monday); 
console.log(Days[1]); 
enum NumericEnum{
    First,
    Second,
    Third
}
console.log(NumericEnum.First);
console.log(NumericEnum[0]);
enum StringEnum{
    First="First",
    Second="Second",
    Third="THIRD"
}
console.log(StringEnum.First);
// Reverse Mapping (for Numeric Enums): Numeric enums allow reverse mapping, meaning you can access a key by its value:

enum ReverseEnum {
    A = 1,
    B = 2
}

console.log(ReverseEnum[1]);
console.log(ReverseEnum.A); 
