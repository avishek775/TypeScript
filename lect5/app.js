var userInput;
//let userInput : any;
var userName;
userInput = 10;
//userName = userInput
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type 
function generateError(message, code) {
    throw { message: message, stausCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
