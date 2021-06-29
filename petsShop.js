function petAnimal(a,b,c,d) {
    return function dogSpot(w,x,y,z){
    return (a.cost + b.cost + c.cost + d.cost)+(w.price + x.price + y.price+ z.price);
    }
}

let pets = [
    {
        type : "fish",
        cost : 25000,

    },
    {
        type : "cat",
        cost : 15000
    },
    {
        type : "pigeon",
        cost : 5000
    },
    {
        type : "parrot",
        cost : 20000
    },
]
let dogs = [
    {
        name : "husky",
        price : 25000
    },
    {
        name : "Pomorian",
        price : 2000
    }, 
    {
        name : "German Shepherd",
        price : 75000
    },
    {
        name : "Tea Cup Pomorian",
        price : 25000
    }
]

let allPetsCost= petAnimal(...pets)
let allPetsAndDog = allPetsCost(...dogs)
console.log(`The total cost of all pets including Dog is ${allPetsAndDog}`);

