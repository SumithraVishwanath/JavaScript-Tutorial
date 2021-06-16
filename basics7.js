  // Hoisting
let x = function() {


    if (true){
         console.log(v);    //undefined its defnition gets hoisted but not value
         console.log(l);    //Error
        var v=2;  
        let l=1;

    }
    
}
x();






