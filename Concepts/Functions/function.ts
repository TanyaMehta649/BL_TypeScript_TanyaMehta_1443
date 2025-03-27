function greeting(name:string,id:number){
    console.log(`welcome ${name} and id is ${id}`);
}
greeting("vinod",1);
//arrow functions
const greets=(lname:string,id:number)=>{
    console.log(`welcome ${lname} and id is ${id}`);
}
greets("ridhi",2);
const greet1=(lname:string,id:number):string =>{
    return `welcome ${lname} and id is ${id}`;
}
greets("ridhi",2);
//to specify the return type of a function we can use the semicolon : followed by the desired type
function logMessage(message:string):void{
    console.log(message);

}
//function type
type operation=(a:number,b:number)=>number;
const subtraction:operation=(x,y)=>x-y;
console.log(subtraction(12,8));