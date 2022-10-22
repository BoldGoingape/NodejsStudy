const fs = require("fs");

const path = require("path");

//定义正则 <style>
const regStyle = /<style>[\s\S]*<\/style>/;

//正则 script
const regScript = /<script>[\s\S]*<\/script>/;

//获取需要修改的文件
fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, dataStr) => {
  //判断
  if (err) {
    console.log("文件读取错误" + err.message);
  }
  resolveCss(dataStr);
  resolveJS(dataStr);
  resolveHtml(dataStr);
});
function resolveCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  console.log(newCSS);
  //  写入到文件
  fs.writeFile(path.join(__dirname, "/index.css"), newCSS, (err) => {
    if (err) console.log("写入失败" + err.message);
    console.log("写入成功");
  });
}
//获取script部分
var resolveJS = (htmlStr) => {
  const r2 = regScript.exec(htmlStr);
  const newScript = r2[0].replace("<script>", "").replace("</script>", "");
  //   console.log(newScript); 写入script 文件到数据
  fs.writeFile(path.join(__dirname, "/index.js"), newScript, (err) => {
    if (err) {
      console.log("文件写入失败" + err.message);
    }
    console.log("写人成功");
  });
};
//html部分
var resolveHtml = (htmlStr) => {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript, '<script src="./index.js"></script>');

  //写入替换后的html
  fs.writeFile(path.join(__dirname, "index1.html"), newHTML, (err) => {
    if (err) console.log("写入失败" + err.message);
    console.log("写入成功");
  });
};
