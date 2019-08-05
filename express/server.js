// express保留了原生的功能，添加了一些方法，增强了原有的功能
const express = require('express');

var server = express();

// server.use('/a.html',function (req,res) {
//     //req,res:在原生的基础上进行了封装
//     //相比原生res.write()可以返回json
//     // res.send('abc');
//     res.send({a:12,b:13});
//     res.end();
// });

// server.use('/b.html',function (req,res) {
//     res.send('123');
//     res.end();
// });
server.get("/",function(req,res) {
    console.log('get');
})

server.post("/",function(req,res) {
    console.log('post')
})
// server.use('/',function (req,res) {
//     console.log('use')
// });
server.listen(8089);



// express最基础的用法，
// 1.创建服务：var server = express();
// 2.监听：server.listen(8089);
// 3.处理请求：server.use('地址',function(req,res) {
// });


// 处理请求的方法3种：.get() .post() .use()
// .get('/',function(req,res){})  接收用户的get请求
// .post('/',function(req,res){})  接收用户的post请求
// .use('/',function(req,res){})  通吃