const express = require('express');

var server = express();

server.listen(8082);

// 创建user/路由
var routeUser = express.Router();
server.use('/user',routeUser);
routeUser.get('/1.html',(req,res) => {
    res.send('user1');
})
routeUser.get('/2.html',(req,res) => {
    res.send('user2');
})


// 创建article路由
var routeArticle = express.Router();
server.use('/article',routeArticle);
routeArticle.get('/1.html',(req,res) => {
    res.send('article1');
})
routeArticle.get('/2.html',(req,res) => {
    res.send('article2');
})