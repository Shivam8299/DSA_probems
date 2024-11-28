const input = require('readline-sync');
let num1= Number(input.question("enter the value of num1 :-"))
let num2= Number(input.question("enter the value of num2 :-"))

for(let i = num1; i<=num2; i++){
    let count =0;
    for(let j=2; j<i; j++){
        if(i%j==0){
            count++
            break;
        }
    }
    if(i>1 && count == 0){
        console.log(i)
    }

}