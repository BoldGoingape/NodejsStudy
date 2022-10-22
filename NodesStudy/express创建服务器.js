//导入 express
const express = require("express");

//创建 web 服务器
const app = express();

// app.get("/", (req, res) => {
//   res.send("启动成功11");
//   console.log(req.query);
//   //   res.send(req.query);
// });

app.get("/:id/:name", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});

app.post("/", (req, res) => {
  res.send({ name: "张三", age: "18" });
});
//启动服务器
app.listen(88, () => {
  console.log("服务已启动");
});
