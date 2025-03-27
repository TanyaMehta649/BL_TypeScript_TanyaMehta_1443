// A union type allows a value to be one of several types. It is denoted using the pipe (|) operator.
let values: string | number;
values = "hello";
values = 123;

function printId(id: number): void {
    console.log(`${id}`);
}
printId(123);
printId(56);
type Person = {
    name: string;
    age: number;
};

type Employee = {
    empId: number;
    department: string;
};
type EmployeeDetails = Person | Employee;

const employee1: EmployeeDetails = {
    name: "Vinod",
    age: 29,
};

const employee2: EmployeeDetails = {
    empId: 1111,
    department: "Engineering",
};

// Intersection Type: Must satisfy both Person and Employee

