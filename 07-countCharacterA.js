console.log("--------------------------------Count of the Character a or A----------------------------------------------------------");
console.log("The Given String is :I Am learning JavaScript,The Language of internet");

var character = "I Am learning JavaScript,The Language of internet";
var countOfA = 0;
for (let index = 0; index < character.length; index++) {
    var char =character.charAt(index).toLowerCase();
    if (char == 'a') {
        countOfA = countOfA+1;
    } 
}
console.log(`Count of char 'a' or 'A' : ${countOfA}`);




console.log("------------------------------------------------------------------------------------------");
console.log(" The Given String is :My Favourite Movie is LAggAn" );

var character = "My Favourite Movie is LAggAn";
var countOfA = 0;
for (let index = 0; index < character.length; index++) {
    var char =character.charAt(index).toLowerCase();
    if (char == 'a') {
        countOfA = countOfA+1;
    } 
}
console.log(`Count of char 'a' or 'A': ${countOfA}`);

