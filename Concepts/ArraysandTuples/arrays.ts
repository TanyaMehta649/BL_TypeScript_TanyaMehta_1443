//in ts an array is a datatype that can store multiple values of different data types sequentially
//using sq brackets
 const numbers1:number[]=[1,2,3,4,5];
 //using array constructor
 const numbers2:number[]=new Array(1,2,3,4,5);
// const names:string[]=Array.of("vinod","technical");
// console.log(names[1]);
//this will work on Ecmascript 2015
//read only arrays
//In TypeScript, readonly arrays provide a way to create arrays that cannot be modified after they are initialized. These are useful for ensuring immutability in your code.
const choclates:readonly string[]=["eclairs","milkybar","dairymilk"];
// choclates.push("choco pie");
//this will also produce an error