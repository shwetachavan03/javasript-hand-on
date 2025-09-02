
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumbers);
console.log("--------------------------------------------------------------");
console.log("1. Array elements with index from array:");
arrayNumbers.forEach((value, index) => {
  console.log(`Index is: ${index}, Value is: ${value}`);
});
console.log("--------------------------------------------------------------");
console.log("\n2. Positive numbers from array:");
arrayNumbers.forEach((value) => {
  if (value > 0) {
    console.log(value);
  }
});
console.log("--------------------------------------------------------------");
let negativeNumbers = [];
arrayNumbers.forEach((value) => {
  if (value < 0) {
    negativeNumbers.push(value);
  }
});
console.log("\n3. Negative numbers from array:", negativeNumbers);
console.log("--------------------------------------------------------------");
console.log("\n4. Even numbers from array:");
arrayNumbers.forEach((value) => {
  if (value % 2 === 0) {
    console.log(value);
  }
});
console.log("--------------------------------------------------------------");
let sum = 0;
arrayNumbers.forEach((value) => {
  sum += value;
});
console.log("\n5. Sum of all element from array:", sum);
console.log("--------------------------------------------------------------");
console.log("\n6. Even indexed values from array:");
arrayNumbers.forEach((value, index) => {
  if (index % 2 === 0) {
    console.log(` ${value}`);
  }
});