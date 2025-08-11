console.log("------------------------------------------------------------------------------------------");
function factorialOfNum(num) {

    if (num === null || num ===undefined || isNaN(num) || num < 0) {
        console.log(`Invalid input ${num} is : unhappy scenario's`);
        return;
    }

    if (num === 0) {
        console.log(`Factorial of number ${num} is : 1`);
        return;
    }


    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`Factorial of number ${num} is : ${factorial}`);
}


factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);