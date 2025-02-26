function sum(num1, num2, printResult, total) {
    if (printResult) {
        console.log("".concat(total, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var total = "the total of numbers is :";
var printResult = true;
sum(2, 300, printResult, total);
