const fs = require('fs');

console.log('start')
const first = fs.readFileSync("./content/first.txt","utf8")
const second = fs.readFileSync("./content/second.txt","utf8")
fs.writeFileSync("./content/sj.txt","Hello this is sj text file");
console.log(first)
console.log(second)

console.log("done with this task.!")
console.log('start the next one ')