let n1 = 5 + '5';
console.log(typeof(n1));   //string
console.log(n1);    //55 

let n2 = '4' - 2;
console.log(n2); // 2
console.log(typeof(n2)); //number

let n5 = '4' - 'hello';
console.log(n5); // NaN
console.log(typeof(n5));   //number

let n6 = '4' - true;
console.log(n6); // 3
console.log(typeof(n6)); //number

let n7 = 4 + true;
console.log(n7); // 5
console.log(typeof(n7)); //number

let n8 = 4 + undefined;
console.log(n8);  // NaN
console.log(typeof(n8)); //number

let n9 = true + undefined;
console.log(n9);  // NaN
console.log(typeof(n9)); //number

let n10 = null + undefined;
console.log(n10);  // NaN
console.log(typeof(n10)); //number



