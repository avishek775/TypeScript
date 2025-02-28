// Object, Array, Tuple, Enum


//object

// const person : {
//     firstName: string;
//     age: number;
// }  = {

//     firstName : "Patel",
//     age : 21

// };

// console.log(person.age);





//Array
// const person : {
//     firstName: string;
//     age: number;
//     skills : (string | number)[]
// }  = {

//     firstName : "Patel",
//     age : 21,
//     skills : ["React", "Node", "Next", 1,2]

// };

// let favLang : string[];
// favLang=["Hindi", "English"]

//console.log(person);




// let favLang2 : (string | number | boolean)[];
// favLang2=["Hindi", "English", 1,8, true]
//console.log(favLang2);





// // Tuple

// const person : {
//     name : string;
//     age : number;
//     skills: string[];
//     product: [number, string]
// } ={ 
//     name : "Abhishek",
//     age : 24,
//     skills : ["react", "javaScript"],
//     product : [10, "Macbook M2"]
// }

// console.log(person.product[0]=20);



//Enum

   enum Role {ADMIN, AUTHOR, READ_USER_ONLY};
   const person = {
    name : "Abhishek",
    age : 24,
    skills : ["react", "javaScript"],
    product : [10, "Macbook M2"],
    role : Role.ADMIN
}

if (person.role === Role.AUTHOR){
    console.log("Author"); 
} else if(person.role === Role.ADMIN) {
    console.log("Admin");
} else if(person.role === Role.READ_USER_ONLY){
    console.log("read user only");
    
}
