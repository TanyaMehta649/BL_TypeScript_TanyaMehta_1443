//tuples are a data structure that allows you to store a fixed size collection of elements of different types
//similar to arrays but their type are fixed and declared at the time of creation
let tuples: [string,number];
tuples=["hello",32];
//we cant interchange the values
let user: [number,string]=[1,"john"];
console.log(user[0]);
console.log(user[1]);
//a good practise is to make our tuple read only
let ourTuple: [number,boolean,string];
ourTuple=[5,false,'old element'];
ourTuple.push('added a new element');
console.log(ourTuple);
//but if we want to make it as read only so that no one can do changes
const ourReadOnlyTuple: readonly[number,boolean,string]=[5,true,'the real coding'];
// ourReadOnlyTuple.push('add one more');
//this throws an error
//we can also destruct them
//optional elements
let optionalTuple: [string, number?];
optionalTuple = ["hello"]; 
optionalTuple = ["hello", 42]; 
