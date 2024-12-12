// Simulate a dice roll (1-6) and keep track of how many times each number appears after 10 rolls.


let numArr = [];
for(let i=1; i<=10; i++){
    let randomNum = Math.floor(Math.random()*6+1);
    numArr.push(randomNum)
}
console.log(numArr)
let frequency = {};
for (let num of numArr) {
    frequency[num] = (frequency[num] || 0) + 1;
}
for (let num in frequency) {
    console.log(`Number ${num} appeared ${frequency[num]} times.`);
}


