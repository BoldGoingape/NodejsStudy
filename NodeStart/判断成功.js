const fs = require("fs");
fs.readFile("./11.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("文件读取失败" + err.message);
  }
  console.log("文件读取成功" + dataStr);
});
