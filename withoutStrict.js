// without strict mode- this keyword

console.log(this); //window

function demo() {
  console.log(this); //window
}
demo()

var car = {
  make: "Renault Kwid",
  autopilot : function () {
    console.log(this);  //{make: "Renault Kwid",autopilot:f}
    var self=this;
    function sample() {
        console.log(this);  //window
        console.log(self)    //{make: "Renault Kwid",autopilot:f}
    }
    sample()
  }
}

console.log(car.autopilot()); //undefined

