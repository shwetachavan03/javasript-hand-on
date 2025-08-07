
var monthOfYear = function(MonthNum){
 switch (MonthNum) {
    case 1:
        console.log(`${MonthNum} - January`); 
        break;
        
    case 2:
        console.log(`${MonthNum} - February`); 
        break;

    case 3:
        console.log(`${MonthNum} - March`); 
        break;

    case 4:
        console.log(`${MonthNum} - April`); 
        break;

    case 5:
        console.log(`${MonthNum} - May`); 
        break;

    case 6:
        console.log(`${MonthNum} - June`); 
        break;

    case 7:
        console.log(`${MonthNum} - July`); 
        break;

    case 8:
        console.log(`${MonthNum} - August`); 
        break;

    case 9:
        console.log(`${MonthNum} - Septmber`); 
        break;

    case 10:
        console.log(`${MonthNum} - October`); 
        break;

    case 11:
        console.log(`${MonthNum} - November`); 
        break;

     case 12:
        console.log(`${MonthNum} - December`); 
        break;

     default:
        console.log(`${MonthNum} - Invalid Input`); 
        break;
    }
      
 
}
       monthOfYear(0);
       monthOfYear(2);
       monthOfYear(5);
       monthOfYear(12);
       monthOfYear(15);
       monthOfYear(100);
       monthOfYear(null);
       monthOfYear(undefined)