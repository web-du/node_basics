const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
// body-parser:只能用来解析普通的post数据,不能解析文件上传类型的post数据
const bodyParser = require('body-parser');
// 获取上传的post文件数据得用到multer中间件
const multer = require('multer');
const ejs = require('ejs');
const jade = require('jade');


const server = express();

// 生成multer对象
// dest:目标文件数据存储的路径
var objMulter = multer({dest:'./www/upload'});


server.listen(8089);

//1.解析cookie
server.use(cookieParser('dwz and sxf'));

//2.使用session
var arr = [];
for (var i = 0 ;i < 1000; i++ ) {
    arr.push('keys'+Math.random());
}
server.use(cookieSession({
    name: 'dwz',
    keys: arr,
    maxAge:3600*1000
}))


//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
// .single('file'):只接受文件名为file的文件   .any:接受所有的文件数据
server.use(objMulter.any());
// 用户请求
server.use('/',(req,res,next) => {
    // get数据：req.query  post数据：req.body  cookie:req.cookies  session:req.session  req.files: 上传的文件数据数组
    console.log(req.query,req.body,req.files,req.cookies,req.session)
})

//4.static数据
server.use(static('./www'))