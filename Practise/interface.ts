interface Products {
    name: string;
    price: number;
    quantity: number;
}

const products1: Products = {
    name: "dryer",
    price: 1000,
    quantity: 2
};

const calculate = (product: Products): number => {
    const { price, quantity } = product;
    return price * quantity;
};

console.log(calculate(products1)); 