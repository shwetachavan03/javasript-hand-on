

const person = {
  fullName: "Stew Jobs",
  age: 23,
  isMarried: false,
  friends: ["Anil", "Sunil", "Elon"],
  address: {
    city: "Pune",
    street: "Wakad",
    pin: 411057
  }
};

const result = JSON.stringify(person);

console.log("Type is:", typeof result);

// Print JSON string
console.log(result);

console.log("=== JSON to Object ===");

// JSON string (in backticks)
let jsonStr = `
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

// Convert JSON string → Object
const user = JSON.parse(jsonStr);

// Print type
console.log(typeof user);   // object

// Print full object
console.log(user);

// Print only title
console.log(user.title);