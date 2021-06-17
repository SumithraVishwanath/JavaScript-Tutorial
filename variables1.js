// Block scope of var and let

for(var i=0;i<3;i++){
    console.log(i);     // 0,1,2
}
console.log(`out of for loop ${i}`);  //3  var can be accessed outside block

for(let j=0;j<3;j++){
    console.log(j);   // 0,1,2
}
// console.log(`out of for loop ${j}`); //Error - Let has Block restriction
