const express = require('express');
const bodyParser = require('body-parser');
// 获取上传的post文件数据得用到multer中间件
const multer = require('multer');
// 需要用到fs.rename来重命名上传的文件数据
const fs = require('fs');
const pathLib = require('path');

// 生成multer对象
// dest:目标文件数据存储的路径
var objMulter = multer({dest:'./www/upload'});

var server = express();
server.use(bodyParser.urlencoded({extended: false}));
// .single('file'):只接受文件名为file的文件   .any:接受所有的文件数据
server.use(objMulter.single('file'));
server.post('/',(req,res) => {
    // console.log(req.body)
    console.log(req.file);
//     { fieldname: 'file',
//   originalname: 'complete-img01.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: './www/upload',
//   filename: '1c0e8f09af141b4061c950afbe315422',
//   path: 'www\\upload\\1c0e8f09af141b4061c950afbe315422',
//   size: 15754 }



    // 获取原始的文件扩展名
    var newName = req.file.path + pathLib.parse(req.file.originalname).ext;
    fs.rename(req.file.path,newName,err => {
        if (err)
            res.send('上传失败');
        else 
            res.send('上传成功');
    })
    // 重命名
})
server.listen(8081);



/**
 * body-parser  解析post数据  enctype="application/x-www-form-urlencoded"
 * multer    解析post文件数据  enctype="multipart/form-data"
 * 
 * **/