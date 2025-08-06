
var checkEvenOdd = function(num) {
  if (num % 2 === 0) {
    console.log(`${num} : The number is EVEN`);
  } else {
    console.log(`${num} :The number is ODD`);
  }
};

checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);
console.log("------------------------------------------------------------------------------------------");

var checkVotingEligibility = function(age) {
  if (age >= 18) {
    console.log(`Age ${age} :  This age is Eligible for vote`);
  } else {
    console.log(`Age ${age} : This age is Not eligible for vote`);
  }
};

checkVotingEligibility(18);
checkVotingEligibility(20);
checkVotingEligibility(17);
checkVotingEligibility(40);
console.log("------------------------------------------------------------------------------------------");

var checkStringLength = function(str) {
  if (str.length > 10) {
    console.log(`"${str}" :  This string is More than 10 characters`);
  } else {
    console.log(`"${str}" : 10 or fewer characters`);
  }
};

checkStringLength("JavaScript - ES6");

console.log("------------------------------------------------------------------------------------------");

var checkStringStart = function(str) {
  if (str.startsWith("Java")) {
    console.log(`"${str}" : Starts with "Java"`);
  } else {
    console.log(`"${str}" : Does not start with "Java"`);
  }
};

checkStringStart("JavaScript Language");
checkStringStart("Programming Language");