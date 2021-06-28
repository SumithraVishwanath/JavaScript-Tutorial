class Grofers{
    constructor(infoDal, infoFruit, infoVeg, infoOil){
      
    let map1 = new Map();  
        map1.set('Dal', infoDal)
        map1.set('Fruit', infoFruit)
        map1.set('Vegetable', infoVeg)
        map1.set('Oil', infoOil)
        return map1;

    }
}
let items = new Grofers({name: 'greengram', price: "260"}, {name: 'Apple', price: "900"}, {name: 'Carrot', price: "800"},  {name: 'SunFlower', price: [220, 406, 930 ,800, 390, 960]});
console.log(items);

// to get price of each product
console.log(` Price of Individual Products `);

var arr1 = []
for (const i of items.keys()) {
  arr1[i] = items.get(i).price
}
console.log(arr1);

let individualOilPrice =items.get('Oil').price

//get 5 litres of oils where the oil price should be less than 500 and add them

let totalCostOfOil = individualOilPrice.filter(item => item<500).map((item)=>item*5).reduce((acc, item)=> acc+item,0)
console.log(` The Total cost of Oil = ${totalCostOfOil}`);
  
// Get the Total items present in Grofers
console.log(`Total items present in grofers = ${items.size}`);

// Remove Dal from Grofers
items.delete('Dal')
console.log(`After Removing Dal from grofers`);
console.log(items);

//check whether grofers contains fruits
console.log(`${items.has('Fruit')} we have fruits in grofers`)

// Remove all items from Grofers
items.clear()
console.log(`After Clear functn grofers consist of ${items.size} items`); 




