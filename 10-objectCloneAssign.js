

// Step 1: Create object 'bankSbi' with at least 4 properties
const bankSbi = {
  BankHolderName: "Kumar Sharma",
  branch: "Sangli",
  ifscCode: "SBIN0001508",
  ContactNo :18004253800
};
console.log( bankSbi);
console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Step 2: Create object 'bankLocation' with properties
const bankLocation = {
  street: "Visharambag",
  city: "Sangli",
  State :"Maharashtra",
  pin: 416416
};
console.log( bankLocation);
console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Step 4: Create object 'rateOfInterest'
const rateOfInterest = {
  homeLoanInterest: "5.5%",
  personalLoanInterest: "15.75%",
  duelInterest: "15.5%"
};

// Step 5: Merge step 1, step 2, and step 4 into new object 'sbiDetails'
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);



console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Step 6: Traverse merged object using for-in loop
console.log(" Traversing merged object using for-in loop :");
for (const property in sbiDetails) {
  console.log(` ${property}:-${sbiDetails[property]}`);
}
console.log("---------------------------------------------------------------------------------------------------------------------------------");
