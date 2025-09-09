
//async function fetchData() {
    //console.log("Fetching Data....");
    //console.log("Successfully fetched data...");
    //return "Some Data";
//}

//let result = fetchData();
//result.then((resolve) => {
   // console.log(resolve);
//});


async function fetchData() {
    console.log("Fetching Data....");
    console.log("Successfully fetched data...");
    return "Some Data";
}

let result = await fetchData();
console.log(result);
