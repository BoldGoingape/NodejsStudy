//导入数据模块
const mysql = require("mysql");
//创建 数据库的连接关系
const db = mysql.createPool({
  host: "127.0.0.1", //数据库地址
  user: "root", //账号
  password: "abc123", //密码
  database: "hruser", //要操作的数据库
});
// db.query("select 1", (err, results) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(results);
// });

db.query("show tables;", (err, results) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(results);

  db.query("select * from hrusre", (err, results) => {
    if (err) {
      return console.log(err.message);
    }
    console.log(results);
  });
});
//插入数据
const user = {
  username: "张三",
  password: "123121",
};
//执行sql 语句 插入数据
const sqlStr = "insert into hrusre (username, password) values(?,?)";

db.query(sqlStr, [user.username, user.password], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows == 1) {
    console.log("数据插入成功！");
  }
});
//更新数据
const userr = {
  id: 6,
  username: "对对赌地",
  password: "123321",
};
// const SqlStr = "update hrusre set username=?,password=? where id=?";
const SqlStr = "update hrusre set ? where id=?";
// db.query(SqlStr, [userr.username, userr.password, userr.id], (err, results) => {
db.query(SqlStr, [userr, userr.id], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("添加成功！！");
  }
});

//删除数据
const DelSql = "delete from hrusre where id=?";
db.query(DelSql, 1, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("数据删除成功！");
  }
});
//标记删除  添加状态字段
