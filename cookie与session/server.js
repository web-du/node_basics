// npm install express express-static cookie-parser cookie-session
const express = require('express');
// 可以用于读取cookie
const cookieParser = require('cookie-parser');
var server = express();


server.listen(8089);

//cookie  你得把签名的密钥放进cookieParser中
server.use(cookieParser('dwz and zt'));

// server.use('/aaa/a.html',function(req,res) {
//     // 向浏览器发送cookie  path:目录路径，maxAge:过期时间
//     res.cookie('user','dwz',{path:'/aaa',maxAge:30*24*3600*1000});
//     res.send('ok')

//     console.log(req.cookies)
// })

server.use('/',(req,res) => {
    // 加密cookie
    req.secret = "dwz and zt";
    res.cookie('user','dwz',{signed: true});

    // 删除cookie
    res.clearCookie('user')
    res.send('ok');
    // 你得把签名的密钥放进cookieParser中，要不然你获得得还是是加密后的cookie
    // req.cookies:存的是没有加密过的cookie, req.signedCookies:获取的是签过名的cookie
    // console.log(req.cookies)


    
    console.log(req.signedCookies)
})


// cookie
//1.cookie的空间非常小 2.安全性非常差

/**
 * a.发送cookie
 * res.secret="字符串"
 * res.cookie(名称，值，{path:'/',maxAge:毫秒，signed:加密})
 * 
 * b.读取cookie
 * 用到cookie-parser中间件
 * server.use(cookieParser('如果cookie加密了这里就是加密cookie的字符串'))
 * 
 * req.cookies: 获取的是未签名的cookie  
 * req.signedCookies: 获取的是签名之后的cookie
 * 
 * 
 * c.删除cookie
 * res.clearCookie(名字)
 * **/