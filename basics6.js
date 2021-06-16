//Spread operator for Objects

const a = {
    name : "ninja",
    age : 23,
    salary : 95000
}
console.log(a);

const b = {...a}
console.log(b);

const c = {
    hobby : "playing" ,
    id : 235 ,
    age : 25
}

const d = {...a, ...c}
console.log(d);
console.log(d.salary);
console.log(d.age);