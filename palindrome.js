const input = require('readline-sync')
const n = Number(input.question("enter the no."))
let sum = 0;
let r = 0;
let i = n;
while(i>0){
    r = i%10;
    sum = sum*10+r;
    i = parseInt(i/10)
}
if(sum === n){
    console.log(`yes, this is palindrome num ${n}`)
}
else {
    console.log(`no, this is not  palindrome num ${n}`)
}



