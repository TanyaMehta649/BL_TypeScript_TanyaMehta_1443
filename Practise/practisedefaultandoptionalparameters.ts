interface Market {
    productname: string;
    price: number;
    discount: number;
}

function add(productname: string, price: number, discount: number = 10): Market {
    return {
        productname,
        price,
        discount
    };
}

const answer = add("juicer", 10000); 
console.log(answer); 