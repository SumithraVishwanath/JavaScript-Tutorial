 let person = {
     name : "priya",
     age : 22,
     gender : "Female",
     isAlive : true,
     address : {
       city:  "Bangalore",
       state: "Karnataka"

    },
    greeting : function () {
        let msg =`My name is ${this.name}, and i am a resident of ${this.address.city}`
        console.log(msg);   
    }
}
 console.log(person.greeting());

 //to check the property is present within person object - "in"
 console.log("age" in person); // true

 

 