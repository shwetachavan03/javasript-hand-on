
console.log("---------------- Reverse String ----------------");
console.log("The Given string is:work Hardalways pays back " );


function reverseString(str) {
    var reverse = "";
    

    for (let index = str.length - 1; index >= 0; index--) {
        let char = str.charAt(index);
        if (char !== " ") { 
            reverse += char;
        }
    }
    
    return reverse;
}

let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

console.log(`The Reversed string is:${ reverseString (string1)}`);
console.log("The Given string is:Soon I will be Angular IT Champ  " );

console.log( `reversed string is :${reverseString (string2)}`);