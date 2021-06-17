"use strict";

//  x = 3.14;       // This will cause an error because x is not declared
var x = 3.14;
console.log(x);

function myFunction() {
    // y = 3.14;   // This will also cause an error because y is not declared
    let y = 3.14
    console.log(y);
  }
  myFunction()


// p = {p1:10, p2:20};   // Error :Using an object, without declaring it
let p = {p1:10, p2:20};
console.log(p);


var b = 3.14;
// delete x;                // Error: Deleting a variable is not allowed. 

function c(p1, p2) {};
// delete c;         // Error: Deleting a function is not allowed. 


// function x(p1, p1) {};   // Error: Duplicating a parameter name
function x(p1, p2) {};


// var x = 010;             //Error: Octal numeric literals are not allowed

// var arguments = 3.14;    // Error: arguments cannot be used as a variable










