

function squareOfWordLength(word) {
  var length = word.length;
  var square = length * length;
  console.log(`The length of "${word}" is ${length}`);
  console.log(`The square is : ${square}`);
  
  
  return square;
}


squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");


function stringOperations() {
  var str = "I am MERN Stack Developer";
  var strLength = str.length;
  var wordCount = str.split(" ").length;

  var result1 = strLength / wordCount;
  var result2 = strLength * wordCount;

  console.log(` the given String is: ${str}`);
  console.log(`Total characters of the string is: ${strLength}`);
  console.log(`Total words of the string: ${wordCount}`);
  console.log(`Length divided by words: ${result1}`);
  console.log(`Length multiplied by words: ${result2}`);
}


stringOperations();