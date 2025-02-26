function sum (num1 : number, num2 : number, printResult : boolean, total : string){
    if(printResult){
        console.log(`${total} ${num1+num2}`); 
    } else{
        return num1 + num2
    }
  
}

const total = "the total of numbers is :"

const printResult= true
sum(2,300, printResult, total)
