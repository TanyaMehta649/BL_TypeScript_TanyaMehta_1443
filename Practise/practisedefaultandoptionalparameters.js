"use strict";
function add(productname, price, discount = 10) {
    return {
        productname,
        price,
        discount
    };
}
const answer = add("juicer", 10000);
console.log(answer);
