/*Write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of two numbers is 100 */
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0));  //true
console.log(isEqualTo100(0,100));   //true
console.log(isEqualTo100(0,10));    //false
console.log(isEqualTo100(20,89));   //false
console.log(isEqualTo100(20,80));   //true
console.log(isEqualTo100(50,50));   //true