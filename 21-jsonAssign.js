



let jsonData = `
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}
  `;


let obj = JSON.parse(jsonData);
console.log("typeof :", typeof obj);

console.table(obj);






console.log(" log Role:", obj.role[0]);


let lastName = obj.name.split(" ")[1];
console.log("Last Name:", lastName);

let joiningYear = obj.doj.split("-")[2];
console.log("Joining Year of employee:", joiningYear);