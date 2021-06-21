function sample(array) {
// create a blank array
let arr = [];
// create a helper function with an array argument
 function helper (array) {
     // write a for loop
     for (let i = 0; i < array.length; i++) {
         let element = array[i];
         // if the element is an array then recurse with an helper function
         if(Array.isArray(element)) {
             helper(element);
         } else {
             // push the element into Blank Array
             arr.push(element)
         }
     }
    
 }
  helper(array)
  //return the array
  return arr.length;

}
console.log(sample([1, [2, 3]]));  //3
console.log(sample([1, [2, [3, 4]]]));  //4
console.log(sample([1, [2, [3, [4, [5, 6]]]]]));  //6
console.log(sample([1, [2], 1, [2], 1]));  //5

console.log(sample([]));  //0

