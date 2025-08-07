
console.log(`---------Print numbers from 5 to 15 by incrementing 1----------------- `);
for (var index = 5; index < 16; index++) {
    console.log(index); 
}

console.log(`---------Print numbers from 50 to 40 decrementing by 1-----------------  `);
for (let i = 50; i>=40; i--) {
    console.log(i); 
}

console.log(`--------- Print first 15 odd numbers ----------------------------------`);
var oddCount = 1;
var i = 1;
while (oddCount<=15) {
    if (i%2==1) {
        console.log(i);
        oddCount = oddCount+1; 
    }
    // update 
    i++;
}

console.log(`--------- Print first 10 Even numbers ----------------------------------`);
for (var index = 2; index <= 20; index=index+2) {
    console.log(index); 
}

console.log(`--------- Print Table of 5 ----------------------------------`);
for (let i = 1; i<=10; i++) {
    console.log(5*i);
} 

console.log(`--------- Print Table of 10 ----------------------------------`);
for (let i = 1; i<=10; i++) {
    console.log(10*i);
} 

console.log(`--------- Print Table of 10 in reverse order ----------------------------------`);
for (let i = 10; i>=1; i--) {
    console.log(10*i);
} 



