var electronics =new Object()
electronics.tv = "samsung"
electronics.fride = "voltas"
electronics.washingmachine = "whirlpool"

var groceries = new Object()
groceries.fruit = "apple"
groceries.nuts = "pista"
groceries.vegetables = ["peas", "tomato", "onion"]

var Amazon= Object.create(electronics)
console.log(Amazon.tv);
var Amazon= Object.create(groceries)
console.log(Amazon.fruit);
