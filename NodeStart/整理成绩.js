const fs = require("fs");
fs.readFile("./成绩1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("文件读取失败");
  }
  console.log("文件读取成功" + dataStr);
  //按照空格进行分割
  const arrOld = dataStr.split(" ");
  console.log(arrOld);
  //   循环分割 进行替换
  const arrNew = [];
  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", ":"));
  });
  //   console.log(arrNew );
  const newArr = arrNew.join("\r\n");
  console.log(newArr);
  //写入数据
  fs.writeFile("./成绩ok.txt", newArr, function (err) {
    if (err) {
      return console.log("写入文件失败" + err.message);
    }
    console.log("文件写入成功");
    console.log(__dirname);
  });
});
