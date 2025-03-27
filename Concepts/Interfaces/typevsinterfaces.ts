//use custom types when we need union intersection or mapped types
//use interfaces when need classes
type Stud={
    name:string;
    age:number;
};
type StudAddr={
    city:string;
    state:string;

};
const BioData: Stud|StudAddr={
    name:"vinod",
    age:21,
    city:"pune",
    state:"Maharashtra",
};
console.log(BioData);
//hmara object kaisa dikhega vo hmara interface hume btata h
interface Greet{
    name:string;
    age:number
}
const greets1:Greet={
    name:'vinod',
    age:21,
}