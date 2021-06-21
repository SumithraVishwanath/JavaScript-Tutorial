function getRandomNumberBetween(from, to){
    return Math.floor(Math.random() * (to-from) + from);
}
console.log(`random number between 3 and 8 is => ${getRandomNumberBetween(3, 8)}`);
console.log(`random number between 100 and 500 is => ${getRandomNumberBetween(100, 500)}`);

// to get Random Languages
var languages = ['c', 'c++', 'java', 'javascript', 'python']
// console.log(`Random Languages ${languages[getRandomNumberBetween(0, languages.length-1)]}`);
setInterval(()=>{console.log(`Random Language => ${languages[getRandomNumberBetween(0, languages.length-1)]}`)},1000)

