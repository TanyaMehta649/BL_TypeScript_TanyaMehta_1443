//by using the readonly modifier we can ensure that a property can only be assigned a value once and cant be modified later
interface Product{
    name:string;
    price:number;
    quantity?:number;
    readonly category:string;

}
const pro1:Product={
    name:"straightener",
    price:2000,
    category:"styling"

};
const pro2:Product={
name:"microwave",
price:8000,
category:"kitchen appliance"
};
console.log(pro1);
console.log(pro2);
// pro1.category="electronics";
//cant  modify the read only property

