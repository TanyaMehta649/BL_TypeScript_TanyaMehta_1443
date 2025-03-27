// In TypeScript, you can extend interfaces using the extends keyword. This allows one interface to inherit the properties of another interface, making it easy to build upon existing types and create more complex structures.
interface College {
    name: string;
    age: number;
};

interface Student extends College {
    rollno: number;
    course: string;
}

const studentdata1: Student = {
    name: "Sanjay",
    age: 20,
    rollno: 4521,
    course: "Bcom",
};

console.log(studentdata1);
