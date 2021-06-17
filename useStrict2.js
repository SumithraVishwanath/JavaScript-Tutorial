  // In strict mode- this keyword
 "use strict"
 
console.log(this); //window

function demo() {
  console.log(this); //undefined
}
demo()

var car = {
  make: "Renault Kwid",
  autopilot : function () {
    console.log(this);  //{make: "Renault Kwid",autopilot:f}
     var self=this;
    function sample() {
        console.log(this);  //undefined
        console.log(self)   //{make: "Renault Kwid",autopilot:f}
    
    }
    sample()
  }
}

console.log(car.autopilot()); //undefined