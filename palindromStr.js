let input = require('readline-sync')
let string = input.question("Enter the string:-")
let newStr="";
console.log(newStr)
 for(let i=string.length-1; i>=0; i--){
    newStr+= string[i]
 }

 console.log(newStr)

 if(string === newStr){
    console.log(`given string is palindrom ${string}`)
 }
 else {
    console.log(`given string is not palindrom ${string}`)
 }