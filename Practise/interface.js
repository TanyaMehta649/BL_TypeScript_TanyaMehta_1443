"use strict";
const products1 = {
    name: "dryer",
    price: 1000,
    quantity: 2
};
const calculate = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculate(products1));
