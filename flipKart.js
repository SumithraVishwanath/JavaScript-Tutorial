class flipkart {
    Constructor(brand, processor, ram, price, operatingSystem, ssd){
    
        this.brand =brand;
        this.processor = processor
        this.ram = ram
        this.price = price
        this.operatingSystem = operatingSystem
        this.ssd = ssd
      
    }
    mobile(){
        console.log(`Mobile Brand = ${this.brand}
        Processor = ${this.processor}
        RAM = ${this.ram}
        Price = ${this.price}
        Display = ${this.display}
        Discount Price = ${this.discount()}`);

    }

    laptop(){
        console.log(`Laptop Brand = ${this.brand}
        Processor = ${this.processor}
        Price = ${this.price}
        OPerating System = ${this.operatingSystem}
        SSD = ${this.ssd}
        Battery = ${this.battery}`);
    }

}
    flipkart.prototype.display = "6.4 inch";
    flipkart.prototype.battery = "500mAh";

    flipkart.prototype.discount = function () {
        let price = 50000
        let discount = 999
        offerPrice = price - discount;
        return offerPrice;
    }

    var product = new flipkart("Lenovo", "Intel", "4GB", 50000, "Windows 10", "256GB");
    product.mobile();
    product.laptop();
    
   
    
    
  