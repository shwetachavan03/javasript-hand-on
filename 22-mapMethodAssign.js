


const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("Given array:", arrayNumbers);



const addTen = arrayNumbers.map((num) => num + 10);
console.log("array with 10 added to each element:", addTen);

console.log("------------------------------------------------------------------------------------------------------");

const cubeArray = arrayNumbers.map((num) => num ** 3);
console.log("Cube of each element is:", cubeArray);

console.log("------------------------------------------------------------------------------------------------------");

const addIndex = arrayNumbers.map((num, index) => num + index);
console.log("array with index added to each element:", addIndex);






