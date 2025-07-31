console.log("--------------------Function Display-----------------------------------------");

function show() {
    console.log("JavaScript is a client-side programming language used to create dynamic interactions in app, game and web development.  ");
}
show();
console.log("--------------------Function Message-----------------------------------------");
function showMessage() {
    console.log("Javascripts simple structure makes it easier to learn compared to other programming languages.");

}

showMessage();

console.log("--------------------Function with parameters----------------------------------");

function personalDetails(firstName, lastName, collegeName) {
    
    console.log("First Name is:", firstName);
    console.log("Last Name is:", lastName);
    console.log("College Name is:", collegeName);
}

// Call the function
personalDetails("Shweta", "Chavan", "Garware College Sangli");

console.log("----------------Function with  parameters and return type-----------------------------");

function add(n1, n2, n3){
    console.log(` the given input is n1- ${n1}, n2- ${n2}, n3- ${n3}`);
    var result = n1+n2+n3;
    console.log(` the Addition of number is: ${result}`);
}
add(10.23,600 ,40 );

function addThreeValues(n1, n2, n3){
    console.log(` the given input is n1- ${n1}, n2- ${n2}, n3- ${n3}`);
    var result = n1+n2+n3;
    console.log(` the Addition of string is: ${result}`);
}

 addThreeValues("Hello","Good","Morning")

 

