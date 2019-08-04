const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

// 由于现在还不了解数据库，所以暂时存储在users中
var users = {}; // {"blue","123456","zhangsan","654321"}

const server = http.createServer((req,res) => {
    var str = "";
    req.on('data',data => {
        str += data;
    });

    req.on('end',() => {
        var obj = urlLib.parse(req.url,true);

        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        // 区分你请求的是接口还是文件
        console.log(GET.act)
        if (url == '/user') {
            // 这个判断自己简单的写的，自己写的接口后缀为user
            switch(GET.act) {
                case 'reg':
                    // 1.检查用户名是否已经有了
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    res.end();
                    // 2.插入users
                    break;
                case 'login':
                    // 1.检查用户是否存在
                    if (!users[GET.user]) {
                        res.write('{"ok":false,"msg":"该用户不存在，请先注册"}');
                    } else if (users[GET.user] != GET.pass) {
                        res.write('{"ok":false,"msg":"密码错误"}');
                    } else {
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                    res.end();
                    // 2.检查用户密码
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
                    res.end();
            }

            console.log(users)
        } else {
            // 读取文件
            var file_name = './www' + url;

            fs.readFile(file_name,(err,data) => {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            })
        }
        
    })
});

server.listen(8089);