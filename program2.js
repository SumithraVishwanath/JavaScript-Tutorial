/* Program to get the extension of a filename */

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('index.html'));  // .html
console.log(getFileExtension('webpack.config.js'));  // .js
console.log(getFileExtension('demo.c'));  // .c