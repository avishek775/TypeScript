// UNION, LITERAL TYPES< TYPE ALIAS, CUSTOM TYPES

//UNION

// function combine(num1: number | string, num2: number | string){
//     let result;
//     if(typeof num1 ==="number" && typeof num2 === "number"){
//         result = num1 + num2
//     }else{
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }
// const sum= combine(10,20)
// const combineName = combine("Abhishek", "Fullstack")

// console.log(sum, combineName);

//Literal Types

// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string"){
//     let result;
//     if(typeof num1 ==="number" && typeof num2 === "number" || conversionType === "as-number"){
//         result = +num1 + +num2
//     }else{
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }
// const sum1= combine("10","20", "as-number")
// const sum2= combine(10,40, "as-number")

// const combinedName = combine("Abhishek", "Fullstack", "as-string")

// console.log(sum1,sum2, combinedName);

// type alias / custom Type

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}
const sum1 = combine("10", "20", "as-number");
const sum2 = combine(10, 40, "as-number");

const combinedName = combine("Abhishek", "Fullstack", "as-string");

console.log(sum1, sum2, combinedName);





type User = {
  name: string;
  age: number;
  skills: string[]
};

const user: User = {
  name: "Gagan",
  age: 22,
  skills: ["React", "javaScript"]
};


function greet(user: User){
console.log(`Hi, I am ${user.name}`);

}
greet(user)