
const array = [3, 4, 5, 2, 6];
array.forEach( (currentValue, index, array) => {
    console.log(currentValue, index, array);
} );

console.log("====== WAP to print odd numbers =========");
array.forEach( (currentValue)=>{
    if (currentValue%2!=0) {
        console.log(currentValue);
    }
} );

let sum=0;
array.forEach(( currentValue)=>{
sum=sum+currentValue;


});
console.log(sum);

console.log("====== WAP to find sum of all array elements =========");
let sum = 0;
array.forEach((element)=>{
    sum = sum + element;
});
console.log(sum);

console.log("===== Traverse the Map =========");
const students = new Map();
students.set(11, "Elon");
students.set(22, "Bill");
students.set(33, "Jeff");
students.set(44, "Larry");
students.set(55, "Stew");
students.set(66, "Mark");
students.forEach((value, key)=>{
    console.log(`KEY: ${key}, VALUE: ${value}`);
    
});