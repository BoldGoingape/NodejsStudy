const fs = require("fs");
fs.writeFile("./11.txt", "这是一条测试", function (err) {
  if (err) {
    return console.log("文件写入失败" + err.message);
  }
  console.log("文件写入成功");
});
