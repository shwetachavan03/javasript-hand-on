
const array = [3, 4,  5,  2, 6];
const resultArray = array.map((element)=>{
    return element*element;
});
console.log(resultArray);

const arrays = [3, 4,  5,  2, 6];
const arrayEven = arrays.filter((element)=>{
    return element%3==0;
});
console.log(arrayEven);