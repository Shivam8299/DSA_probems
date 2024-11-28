const input = require('readline-sync')
const n = Number(input.question("enter the number of rows >>"))
let count = 0;
let sum = 0;
let i = n;
while(i>0){
    i = Math.floor(i/10)
    count ++;
}

// console.log(count)

let j = n;
let digit = 0;
while(j>0){
    digit = j%10;
    sum += digit**count
    j = Math.floor(j/10)
}
if(sum === n){
    console.log(`yes, this is an armstrong number ${n}`)
}
else{
    console.log(`no, this is not an armstrong number ${n}`)
}