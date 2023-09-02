const { promises } = require("dns");
const fs = require("fs");
const { reject } = require("lodash");
const { resolve } = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first , second);
  } catch (error) {
    console.log(error);
  }
};
start();
// getText("./content/first.txt")
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err))
