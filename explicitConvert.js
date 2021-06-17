// Number
var m1 = Number("5")
console.log(m1);   //5
console.log(typeof(m1)); //number

var m2 = Number(true)
console.log(m2);   //1
console.log(typeof(m2)); //number

var m3 = Number(null)
console.log(m3);   //0
console.log(typeof(m3)); //number

var m4 = Number("Hello")
console.log(m4);   //NaN
console.log(typeof(m4)); //number

// String
var m5 = String(8)
console.log(m5);   //8
console.log(typeof(m5));  // string

var m6 = String(true)
console.log(m6);   //true
console.log(typeof(m6));  // string

var m7 = String(null)
console.log(m7);   //null
console.log(typeof(m7));  // string

var m8 = Boolean(5)
console.log(m8);   //true
console.log(typeof(m8));  //boolean

var m9 = Boolean("Hello")
console.log(m9);   //true
console.log(typeof(m9));  //boolean

// parseInt
var m10 = "seven";
console.log(typeof(m10));  //string
var m11 = parseInt(m10);    
console.log(typeof(m11));  //number
console.log(m11);   //NaN

// parseFloat
var m12 = true;
console.log(typeof(m12));  //boolean
var m13 = parseFloat(m12);    
console.log(typeof(m13));  //number
console.log(m13);   //NaN



