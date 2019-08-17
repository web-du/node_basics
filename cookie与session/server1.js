const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser());
// 一般放在cookieParser的后面使用，因为只有解密后才会获取cookie中的sessionId
server.use(cookieSession({
    // 名称
    name: 'dwz',
    // 密钥越多越安全，需要破解的时间就越长
    keys: ['aaa','bbb','ccc'],
    // 2个小时
    maxAge: 2*3600*1000
}));

server.use('/',(req,res) => {
    
    // 统计访问该网站的次数
    if (req.session['count']) {
        req.session['count'] ++;
    } else {
        req.session['count'] = 1;
    }
    console.log(req.session['count']);
    res.send('ok');
});

server.listen(8089);

/**
 * 1.cookie 存在与浏览器，4k,不安全
 * 可以签名与加密
 * 
 * 2.session: 存在与服务器
 * 不能独立存在，基于cookie
 * **/