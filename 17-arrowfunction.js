
let add = (p1, p2)=>{
    console.log("Inside add function....");
    console.log(`Addition is: ${p1+p2}`);
}
add(10, 20);

console.log("======= Arrow function with return value ==========");
let square = (n1)=>{
    let result = n1*n1;
    return result;
}
let returnValue = square(5);
console.log(`Square of 5 is: ${returnValue}`);