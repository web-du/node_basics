const express = require('express');
const bodyParser2 = require('./libs/my-body-parser');
var server = express();

server.listen(8089);

server.use(bodyParser2)

// 链式操作 next;
// server.use('/',function(req,res,next) {
//     console.log('1');
//     next();
// });

server.use('/',function(req,res,next) {
    console.log(req.body);
})