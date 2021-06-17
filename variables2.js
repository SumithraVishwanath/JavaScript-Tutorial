// var/let/const cannot be accessed outside a function
var variable1 = 1;

function demo() {
    var variable1 = 2;  
    var variable2 = 10;                     
    console.log(`inside func => ${variable1}`);
    console.log(`inside func => ${variable2}`);
}
demo()

console.log("outside func => "+variable1);
// console.log("outside func => "+variable2);  // Error