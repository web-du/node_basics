const http = require('http');
const querystring = require('querystring');
const urllib = require('url')

http.createServer((req,res) => {
    // console.log(req.url);
    // 1：获取req.url利用split方法截取获得
    // 2.利用querystring模块获取
    // 3.利用url模块获取
    if (req.url.indexOf("?") != -1) {
        var arr = req.url.split("?")
        var GET = querystring.parse(arr[1]);
        console.log(GET)

        var obj = urllib.parse(req.url,true);

        var url = obj.pathname;
        var GET1 = obj.query;
        console.log(url,GET1)
    }
    res.write('aaa');
    res.end();

    
}).listen(8089);