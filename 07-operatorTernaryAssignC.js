
function maleMarriageEligibility(gender, age, boyName){
    var result= age>=21 ? `Hey ${boyName} You are Eligible for Marriage` 
         : `Hey${boyName} You are not Eligible for marriage`
         console.log(result);
}


maleMarriageEligibility("Male", 25, "Billgates"); 
maleMarriageEligibility("Male", 17, "Stew Jobs");  



function femaleMarriageEligibility(gender, age, girlName) {
  var result = age >= 18 ? `Hey ${girlName} you are eligible for Marriage`
    : `Hey ${girlName} you are not eligible for marriage`
  console.log(result);
}

femaleMarriageEligibility("Female", 16, "Jenifer");        
femaleMarriageEligibility("Female", 27, "Malinda Gates");  
 