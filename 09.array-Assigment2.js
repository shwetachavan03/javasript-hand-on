
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array);


console.log("------------------------------------------------------------------------------------------------------------");
console.log("1. Total elements of Array is :", array.length);


console.log("------------------------------------------------------------------------------------------------------------");
console.log("2.First element of Array is:", array[0]);
console.log(" Last element of Array is:", array[array.length - 1]);


console.log("------------------------------------------------------------------------------------------------------------");
console.log("3. Third last element in the Array is:", array[array.length - 3]);


console.log("------------------------------------------------------------------------------------------------------------");
console.log("4. Even numbers of Array is:");
for (const num of array) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("5. Odd numbers of Array is:");
for (const num of array) {
    if (num % 2 !== 0) {
        console.log(num);
 }
}
console.log("------------------------------------------------------------------------------------------------------------");

let evenPositionedSum = 0;
console.log("6. Even positioned Array elements is:");
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
    evenPositionedSum += array[i];
}
console.log("6. Sum of even positioned Array elements is:", evenPositionedSum);
console.log("------------------------------------------------------------------------------------------------------------");

let oddPositionedSum = 0;
console.log("7. Odd positioned Array elements is:");
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
    oddPositionedSum += array[i];
}
console.log("7. Sum of odd positioned Array elements is:", oddPositionedSum);
console.log("------------------------------------------------------------------------------------------------------------");

let totalSum = 0;
for (const num of array) {
    totalSum += num;
}
console.log("8. Sum of all Array elements is:", totalSum);

console.log("------------------------------------------------------------------------------------------------------------");

console.log("9. Elements multiple of 5:");
for (const num of array) {
    if (num % 5 === 0) {
        console.log(num);
    }
}
console.log("------------------------------------------------------------------------------------------------------------");
console.log("10. Is 115 available", array.includes(115));
console.log("------------------------------------------------------------------------------------------------------------");
console.log("11. Is 23 available", array.includes(23));
console.log("------------------------------------------------------------------------------------------------------------");

array.splice(3, 0, 55, 66);
console.log('12. Insert Element 55,66 at index 3:');
console.log(array);

console.log("------------------------------------------------------------------------------------------------------------");

 
array.splice(4,  3);
console.log('13. Delete 3 elements from index 4:');
console.log(array);

