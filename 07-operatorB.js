
function greaterNumber(n1, n2){
    var result = n1>n2 ? n1:n2;
    console.log(` the greater no is ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("------------------------------------------------------------------------------------------");

function isEvenOrOddNum(num) {
  return num % 2 === 0 ? true : false;
}


console.log(isEvenOrOddNum(29));   
console.log(isEvenOrOddNum(44));   
console.log(isEvenOrOddNum(0));    
console.log(isEvenOrOddNum(101)); 
console.log("------------------------------------------------------------------------------------------");

function wordLength(word) {
  return word.length % 2 === 0 ? "EVEN" : "ODD";
}


console.log(wordLength("JavaScript")); 
console.log(wordLength("developer"));   
console.log(wordLength("Google"));      