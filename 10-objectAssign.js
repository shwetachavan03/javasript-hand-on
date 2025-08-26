
let professor = {
  firstName: "Meena",
  lastName: "Uday",
  age: 45,
  isMarried: true,
  City: "Pune",
  Subject :"computer Science",

  
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
    masters: "Software Engineering"
  },

  
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming"

  ]
};

console.table(professor); 


console.log("---------------------------------------------------------------------------------------------------------------------------");
professor.totalExperience = "14 years";
console.table(professor);



console.log("------------------------------------------------------------------------------------------------------------------------");
professor.City = "Mumbai";
console.log("Modifying  property of City:", professor.City);


console.log("------------------------------------------------------------------------------------------------------------------------");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("Add new Certificate 2 index of array:", professor.certificates);


console.log("------------------------------------------------------------------------------------------------------------------------");
console.log("Last Certiicate is:", professor.certificates[professor.certificates.length - 1]);

console.log("------------------------------------------------------------------------------------------------------------------------");
console.log("All certificates list:");
for (let i = 0; i < professor.certificates.length; i++) {
  console.log(professor.certificates[i]);

}
