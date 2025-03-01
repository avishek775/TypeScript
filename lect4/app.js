// function return types
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20)); //30
function greet(name) {
    console.log("Namste, ".concat(name));
}
//let combineFunction : Function;
// combineFunction = 10; //invalidCode
// combineFunction = function(){} //validCode
//combineFunction = add; // valid
//combineFunction = greet
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
// Function Type && callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
