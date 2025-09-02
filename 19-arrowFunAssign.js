

const show = () => {
console.log("Good Morning, Today is Monday");
};
show();
console.log("-------------------------------------------------------------");
const multiply = (a, b, c = 1) => {
console.log(`Multiplication of given values is: ${a * b * c}`);
} 
multiply(5, 5, 2);
multiply(10, 4);
console.log("--------------------------------------------------------------");

const addFiveNumbers = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5;
};
let result1 = addFiveNumbers(100, 100, 200, 349, 756);
console.log(`Addition of given numbers is : ${result1}`);
console.log("--------------------------------------------------------------");
let result2 = addFiveNumbers(" I am ", " learning ", " ES6 ", " features ", " in depth ");
console.log(`Addition of given values is : ${result2}`);