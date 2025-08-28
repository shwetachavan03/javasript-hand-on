

function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}


const yesBank = new Bank("YES Bank", "Sangli", "YESB0003321", 1508);
console.log(yesBank);
const sbiBank = new Bank("SBI Bank", "Pune", "SBIN0007654", 1004);
console.log(sbiBank);
const mahBank = new Bank("Maharashtra Bank", "Mumbai", "MAHB00007896", 7506);
console.log(mahBank);
const axisBank = new Bank("Axis Bank", "Satara", "UTIB0004455", 1610);
console.log(axisBank);


Bank.prototype.openTime ="9 AM IST";


Bank.prototype.closeTime ="6 PM IST";


console.log("---------------------------------------------------------------------------------------------------------------------------------");


console.log(`SBI Bank open time is ${sbiBank.openTime} and closes time is ${sbiBank.closeTime}`);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log(`Bank Name is: ${axisBank.bankName},  and Close Time is: ${axisBank.closeTime}`);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log(`Bank Name is : ${yesBank.bankName}, Yes Bank Branch Code is: ${yesBank.branchCode}, Yes Bank Open time is: ${yesBank.openTime}`);

