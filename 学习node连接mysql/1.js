const mysql = require('mysql');

// 1.连接
// createConnection(哪台服务器，用户名，密码，库)
var db = mysql.createConnection({host: 'localhost',user: 'root',password: '3893694364dwz',database: '20190819'});

// console.log(db)

// 2.查询
// query(干啥:添加，查询，删除等,回调)
db.query("SELECT * FROM `user_table`;",(err,data) => {
    if (err) 
        console.log(err);
    else 
        console.log(JSON.stringify(data));
})

/**
 * SQL标准写法
 * 1.关键字大写
 * 2.库、表、字段需要加上``
 * SQL  4大查询语句 ----增删查改
 * 增-INSERT
 * INSERT INTO 表 (字段列表) VALUES(值列表)
 * INSERT INTO `user_table` (`ID`,`username`,`password`) VALUES(0,'dwz1','123456');
 * 
 * 删-DELETE
 * 
 * 改-UPDATE
 * 
 * 查-SELECT
 * SELECT 什么 FROM 表
 * SELECT * FROM `user_table`
 * **/