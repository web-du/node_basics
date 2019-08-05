const express = require('express');
const expressStatic = require('express-static');



var server = express();


server.listen(8081);
// 用户数据
var users = {
    'dwz':'123'
};
server.get('/login',function(req,res) {
    // console.log(req.query);
    var user = req.query['user'];
    var pass = req.query['pass'];

    if (users[user] == null) {
        res.send({ok:false,msg:"此用户不存在"});
    } else {
        if (users[user] != pass) {
            res.send({ok:false,msg:"密码错误"});
        } else {
            res.send({ok:true,msg:"登录成功"})
        }
    }
});

// 处理静态文件(中间件)
// npm install express-static
// 这样就可以访问www目录下的文件了
// express框架依赖中间件
server.use(expressStatic('./www'));