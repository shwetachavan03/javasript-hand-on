
console.log("-------------------------------------------------------------------------------------------");
var square = function(num) {
    return num * num;
};
console.log(`Square of 5 is :${square(5)}`);
console.log(`Square of 6 is :${square(6)}`);
console.log(`Square of 25 is :${square(25)}`);
console.log(`Square of 100 is :${square(100)}`);
console.log(`Square of 67.89 is :${square(67.89)}`);
console.log(`Square of 59 is :${square(59)}`);
console.log("-------------------------------------------------------------------------------------------");

console.log("Type of square function:", typeof square);
console.log("-------------------------------------------------------------------------------------------");

var area = function(length , width ) {
    return length * width;
    
};
console.log("Area of rectangle:", area(499, 917));
console.log("-------------------------------------------------------------------------------------------");

var swapValues = function(val1, val2) {
    console.log(" values Before Swap:", val1, val2);
    let temp = val1;
    val1 = val2;
    val2 = temp;
    console.log(" values After Swap:", val1, val2);
};
swapValues("Mahi","Raina");
swapValues(55,77);
console.log("-------------------------------------------------------------------------------------------");
const stringOps = function(str) {
    console.log("Given string is:", str);

    
    console.log("Total characters of available string is:", str.length);

    
    console.log("Character at index 6 is:", str.charAt(6));


    console.log("Character at index 11 is:", str.charAt(11));

    
    console.log("Last character in given string:", str.charAt(str.length - 1));

    
    console.log("First character:", str.charAt(0));

    
    console.log("Third last character:", str.charAt(str.length - 3));

    
    let words = str.split(" ");
    console.log("Total words in string:", words.length);
    console.log("Square of total words in string:", words.length ** 2);
};

stringOps("JS the most popular language of internet");