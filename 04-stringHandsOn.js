
function stringHandsOn() {
    var originalStr = `   Hey you are doing good, keep it up  `;
    
    
    console.log(`Given input string is: ${originalStr}`);

    console.log("------------------------------------------------------------------------------------------");

    var originalLength = originalStr.length;
    console.log(` Total Length of given string: ${originalLength}`);

    console.log("------------------------------------------------------------------------------------------");

    var trimmedStr = originalStr.trim();
    console.log(`Removing the leading and trailing extra spaces in the given string output is: ${trimmedStr}`);

    console.log("-------------------------------------------------------------------------------------------");

    console.log(` final Length after trim: ${trimmedStr.length}`);

    console.log("------------------------------------------------------------------------------------------");

    console.log(`First character after trim: ${trimmedStr[0]}`);
    console.log(` Last character after trim: ${trimmedStr[trimmedStr.length - 1]}`);
    

    console.log("------------------------------------------------------------------------------------------");

    var words = trimmedStr.split(/\s+/); 
    console.log(`Total number of words in string: ${words.length}`);

    console.log("-------------------------------------------------------------------------------------------");

    var indexGood = trimmedStr.indexOf("good");
    console.log(`Index of word "good": ${indexGood}`);

    console.log("-------------------------------------------------------------------------------------------");

    var substringFrom22 = trimmedStr.substring(22);
    console.log(`Substring starting from index 22: ${substringFrom22}`);

    console.log("--------------------------------------------------------------------------------------------");

    var endsWithUp = trimmedStr.endsWith("up");
    console.log(`Does the string end with "up": ${endsWithUp}`);

    
    var startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`Does the string start with "Hey": ${startsWithHey}`);
}

stringHandsOn();