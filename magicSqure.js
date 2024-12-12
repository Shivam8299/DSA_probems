// const input = require('readline-sync')
// const rows = Number(input.question("enter the num of rows >> "))
// let magicSqure = [];

for(let i= 0; i<rows; i++){
    for(let j=0; j<rows; j++){
        magicSqure.push(input.question(`enter the value of given index ${i},${j} >> `))
    }
}
// console.log(magicSqure)
let sum =[]
for(let i= 0; i<rows; i++){
    let k=0;
    if(i==0){
        for(let j=0; j<rows; j++){
            k+=magicSqure[i,j]
        }
        sum.push(k)
    }
    console.log(sum)
}

