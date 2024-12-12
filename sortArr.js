//Sort an array of numbers without using sort().

const input = require('readline-sync')
const n = Number(input.question("enter the length of an array>>> "))
let numArr = [];
for (let i=0; i<n; i++){
    numArr.push(Number(input.question()))
}

for (let i=0; i<numArr.length; i++){
    for (let j=i+1; j<numArr.length; j++){
        if(numArr[i]>numArr[j]){
            let temp = numArr[i];
            numArr[i] = numArr[j]
            numArr[j] =  temp
        }
    }
}

console.log(numArr)

