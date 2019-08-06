const express = require('express');
const bodyParser = require('body-parser');
var server = express();

server.listen(8089);
// 使用req.body需要使用body-parser
server.use(bodyParser.urlencoded({
    // 拥有两个参数  extended:true/false  扩展模式   limit：限制（接受post的大小）2M:2*1024*1024
}))
server.use('/',function(req,res) {
    // 获取get数据
    console.log(req.body) // post
    // 可以利用body-parser 获取post请求
})




// req.query    GET
// 无需中间件
// req.body  POST  
// 需要body-parser中间件 