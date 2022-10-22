//console.log("大家好！")
const fs = require("fs");
fs.readFile("./111.txt", "utf8", function (err, dataStr) {
  console.log(err);
  console.log("******************");
  console.log(dataStr);
});
// fs.writeFile();
