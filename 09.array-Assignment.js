
const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(' Original Array is:');
console.log(fruits);


console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log("1.First Element of Array is:", fruits[0]);
console.log("Last Element of Array is:", fruits[fruits.length - 1]);

console.log("----------------------------------------------------------------------------------------------------------------------------------");

fruits.unshift("Papaya");
console.log('2. adding Papaya :');
console.log( fruits);

console.log("----------------------------------------------------------------------------------------------------------------------------------");

const mangoIndex = fruits.indexOf("Mango");
if (mangoIndex !== -1) {
  fruits.splice(mangoIndex, 1);
}
console.log('3. removing Mango from Array :');
console.log( fruits);


console.log("---------------------------------------------------------------------------------------------------------------------------------");

fruits.push("Pineapple");
console.log('4. adding Pineapple last position:');
console.log( fruits);
console.log("---------------------------------------------------------------------------------------------------------------------------------");

const wmIndex = fruits.indexOf("WaterMelon");
if (wmIndex !== -1) {
  fruits.splice(wmIndex, 0, "Dragon Fruit");
}
console.log(' 5.inserting Dragon Fruit before WaterMelon :');
console.log( fruits);


console.log("---------------------------------------------------------------------------------------------------------------------------------");

const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex !== -1) {
  fruits[orangeIndex] = "Kiwi";
}
console.log('6. replacing Orange with Kiwi:');
console.log( fruits);
console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log('7.Elements Starting from index 1 to 4:');
console.log(fruits.slice(1, 5));


console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log('8.Last 3 Elements from Array :');
console.log(fruits.slice(fruits.length - 3));

