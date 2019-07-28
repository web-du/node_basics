const http = require('http');

var server= http.createServer(function (request,response) {
    // 返回新建的 http.Server 实例。但进入监听的连接时会执行此回调
    // requset 请求(浏览器请求的信息)
    // response 响应(返回给浏览器的信息)
    // console.log(request.url)
    switch (request.url) {
        case '/1.html':
            response.write("111");
            break;
        case '/2.html':
            response.write('222');
            break;
        default:
            response.write('404');
            break;
    }
    // response.write('abc'); // 向前台输出东西
    response.end(); // 结束
});

// 启动 HTTP 服务器监听连接。
server.listen(8088);