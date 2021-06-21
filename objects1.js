var person ={
    firstName :"John",
    lastName : "Dew",
    age : 50,
    pets : ["foo", "choo", "tow", "roe"],
    sibling : {
        brother : "Grew Dew",
        sister : "Srew Dew"
    }
}
// to get a property by 'Dot Notation'
console.log(person.age);  //50
console.log(person.sibling.brother);  //Grew Dew

// to get a property by 'Bracket Notation'
console.log(person["pets"]);   //[ 'foo', 'choo', 'tow', 'roe' ]

// to Set a property
person["like birds"] = true;
console.log(person["like birds"]);  //true

person.cat = "Meow";
console.log(person.cat);   //Meow

// to modify
person.age = 25;
console.log(person.age);//25

// to delete a property
delete person.cat;
console.log(person.cat);   //undefined
