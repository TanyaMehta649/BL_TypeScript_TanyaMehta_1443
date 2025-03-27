type Car = {
    make: string;
    model: string;
    year: number;
};

type Owner = {
    ownerName: string;
    ownerAddress: string;
};

type CarWithOwner = Car & Owner;

const carWithOwner: CarWithOwner = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    ownerName: "John Doe",
    ownerAddress: "123 Main St, Springfield, IL",
};

console.log(carWithOwner);
