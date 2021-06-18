// Arrow function

const prompt = require('prompt-sync')();
const number = prompt('Enter the number: ');

var squareroot =  (number) => {

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

}
squareroot(number)
