
// Find the total number words of the given string and 
// then calculate the square of it and log it.
var stringOpr = function(){
    var str = "JS the most popular language of internet";
    var splitWords = str.split(" ");
    var totalWords = splitWords.length;
    var square = totalWords * totalWords;
    // console.log(square);
    return square;
}
var returnValue = stringOpr();
console.log(returnValue);