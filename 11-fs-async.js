const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.end("Home Page")
  }
  if(req.url === '/about') {
    for(let i =0;i < 1000;i++){
      for(let j =0 ; j<1000;j++){
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page")
  }
  if(req.url === '/contact') {
    res.end("contact Page")
  }
  res.end("Error page")
})

server.listen(5000,()=>{ console.log("Server listening on 5000")})




























// const fs = require("fs");
// console.log("start")
// //reading file using asynchronous way
// fs.readFile("./content/first.txt", "utf8", (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = res;
//   console.log(first);
//   fs.readFile("./content/second.txt", "utf8", (err, res2) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = res2;
//     console.log(second);
//     fs.writeFile(
//       "./content/sj.txt",
//       `Here is the result : ${first} , ${second}`,
//       (err, res3) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(res3);
//       }
//     );
//   });
// });
// console.log("done with this task.!")
// console.log('start the next one ')