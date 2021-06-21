var car = new Object()
car.make = "BMW"
car.model = "M5"
car.color = "Black"
car.price = "500$"
car.autopilot = function () {
    console.log(`This car has a autopilot feature`);
}
console.log(car.autopilot());

// to set a value
var numberOfCars= car.__proto__ = 5;
console.log(numberOfCars);

//to copy the object
let BMWCar = car;
console.log(BMWCar.make); // BMW

// changed by BMWCar reference
BMWCar.color = "White"
console.log(BMWCar.color); // white



