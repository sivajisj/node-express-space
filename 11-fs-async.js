const fs = require("fs");
console.log("start")
//reading file using asynchronous way
fs.readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  console.log(first);
  fs.readFile("./content/second.txt", "utf8", (err, res2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res2;
    console.log(second);
    fs.writeFile(
      "./content/sj.txt",
      `Here is the result : ${first} , ${second}`,
      (err, res3) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res3);
      }
    );
  });
});
console.log("done with this task.!")
console.log('start the next one ')