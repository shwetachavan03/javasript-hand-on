
function greaterNumber(n1, n2){
    var result = n1>n2 ? n1:n2;
    console.log(` the greater no is ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("------------------------------------------------------------------------------------------");

function isEvenOrOddNum(num) {
    var result= num % 2 == 0 ? "Even" : "Odd";
    return result;
   }
 var resultValue=isEvenOrOddNum(29);
  console.log(`Given no 29 it is ${resultValue}`);

  function isEvenOrOddNum(num) {
    var result=num % 2 ==0 ? "Even" : "Odd";
    return result;
   }
 var resultValue=isEvenOrOddNum(44);
  console.log(`Given no 44 it is  ${resultValue}`);

  function isEvenOrOddNum(num) {
    var result=num % 2 ==0 ? "Even" : "Odd";
    return result;
   }
 var resultValue=isEvenOrOddNum(0);
  console.log(`Given no 0 it is  ${resultValue}`);

  function isEvenOrOddNum(num) {
    var result=num % 2 ==0 ? "Even" : "Odd";
    return result;
   }
 var resultValue=isEvenOrOddNum(101);
  console.log(`Given no 101 it is ${resultValue}`);

console.log("------------------------------------------------------------------------------------------");
   function wordLength(word){
      var length = word.length;
     var result = length % 2 === 0 ? "Even":"Odd";
      console.log(`${word}:${result}\n`);
}
      wordLength("javaScript");
      wordLength("Developer");
      wordLength("Google");
