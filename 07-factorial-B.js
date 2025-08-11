console.log("------------------------------------------------------------------------------------------");
function factorialofWordsCount(sentence) {
    
    if (sentence === null || sentence === undefined || typeof sentence !== "string" ) {
        console.log(`Invalid input ${sentence} is : unhappy scenario's`);
        console.log(`Total number of words in Given string is "" : 0` );
        console.log(`Factorial of 0 is : 1`);
        
        
        return;
    }

    
    let words = sentence.trim().split(/\s+/);
    let wordCount = words.length;


    let factorial = 1;
    for (let index = 1; index <= wordCount; index++) {
        factorial *= index;
    }

    console.log(`Total number of word in Given String  is :"${sentence}": ${wordCount}`);
    console.log(`Factorial of total word count is : ${factorial}`);
   
}

factorialofWordsCount("Revision is the mother of Success");
factorialofWordsCount("We never fail, we always learn, Mind it");
factorialofWordsCount(null);

factorialofWordsCount("Shweta Maruti Chavan");