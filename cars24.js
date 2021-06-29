const prompt = require('prompt-sync')();
class cars24 {
    constructor(model, carRegYear, fuelType, price, RTOCode, variant){
        this.model =model;
        this.carRegYear = carRegYear
        this.fuelType = fuelType
        this.price = price
        this.RTOCode = RTOCode
        this.variant = variant   
    }

    buycar(){
        console.log(`The Car Model is ${this.model}
        The Car is registered in the year ${this.carRegYear}
        The Car is of ${this.fuelType} type
        Price of the Car is ${this.price}
        Its RTO Code is ${this.RTOCode}
        Its Variant ${this.variant}
        The Car Registration State is ${this.regState}
        Kilometers Used is ${this.kilometers}
        The Discount Price will be ${this.discount()}`)
    }

    sellyourcar(){
        const carModelS = prompt('Enter your Car Model: ');
        const carRegnumS = prompt('Enter your Car Registration Number: ');
        const carFuelTypeS = prompt('Enter your Cars Fuel Type: ');
        const carRtoCodeS = prompt('Enter your Cars RTO Code: ');
        const carKilometersS = prompt('Enter how many kilometers your Car is used: ');
        const carPriceS = prompt('Enter your Cars Price: ');

        console.log(`The Specification of your Car 
        Model = ${carModelS}
        Reg Number = ${carRegnumS}
        FuelType = ${carFuelTypeS}
        RTO Code = ${carRtoCodeS}
        Kilometers Used =${carKilometersS}
        Price =${carPriceS}`);
    }
    
}
cars24.prototype.regState = "KA";
cars24.prototype.kilometers = "31,999km";
cars24.prototype.discount = function () {
    let price = 120000
    let discount = 1999
    offerPrice = price - discount;
    return offerPrice;
}

var Cars = new cars24("HYUNDAI- SANTRO XING", 2014, "Petrol", 120000, "KA 01", "GL PLUS");
var Cars1 = new cars24("RENAULT- DUSTER", 2019, "Petrol", 120000, "TN 01", "RXS 106 PS MT");
 console.log(` **** Cars Available to Buy ****`);
Cars.buycar()
Cars1.buycar()
console.log(` **** To Sell your Car provide your Car Details ****`);
Cars.sellyourcar()