// var
 
var a =10;
var a ="Hello";  
console.log(a);  //Hello

//let

let b = 6.54
let b = true;  
console.log(b); //Error: 'b' has already been declared

let b = 6.54
 b = true;  
console.log(b); // true


//const

const c;   //undefined
c = 1;      // re-assigning
console.log(c);   // error

const c = [1,2]
c.push(3);
console.log(c);   //[1,2,3] // it will allow to modify the array because array is an object
 
// but we cannot re-assign an array

const c = [1,2]
c = [1,2,3]
// console.log(c); // Error