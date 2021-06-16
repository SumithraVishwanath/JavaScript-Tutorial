let variable1 = 1;

function demo() {
    let variable1 = 2;                       
    console.log("inside func => "+variable1); //2
    
}
demo()

console.log("outside func => "+variable1); //1


