// function return types
function add(num1 : number, num2 : number) : number{
return num1 + num2;
}
console.log(add(10,20)); //30

function greet(name : string) : void{
    console.log(`Namste, ${name}`);
    
}


//let combineFunction : Function;
// combineFunction = 10; //invalidCode
// combineFunction = function(){} //validCode
//combineFunction = add; // valid
//combineFunction = greet



// Good Practice

let  combineFunction : (a : number, b : number) => number;
combineFunction = add;

console.log(combineFunction(100, 200))


// Function Type && callback

function addHandle(num1 : number, num2 : number, cb : (n : number)=> void){
    const result = num1 + num2
    cb(result)
}
addHandle(10, 20, (result : number)=>{
    console.log(result);
    
})