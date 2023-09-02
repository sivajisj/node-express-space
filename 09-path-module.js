const path = require('path');

// console.log(path.join());

//getting file path
const filePath = path.join('content','subgolder','test.txt')
// console.log(filePath)

//getting base file
const baseName = path.basename(filePath)
console.log(baseName)

//getting absolute path with help of resolve

const absolute = path.resolve(__dirname, "content","subfolder","test.txt");

console.log(absolute)