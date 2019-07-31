const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urllib = require('url');


var server = http.createServer((req,res) => {
    // GET,POSt,文件请求


    // GET
    var obj = urllib.parse(req.url,true);
    // 请求的地址
    var url = obj.pathname;
    // 请求的参数
    const GET = obj.query;


    // POST
    var str = ""
    req.on('data',function(data){
        str += data;
    });

    req.on('end',function(){
        const POST = querystring.parse(str);
        // console.log(url,GET,POST)
        var file_name = './www' + url
        fs.readFile(file_name,(err,data) => {
            if (err) {
                res.write('404')
            } else {
                res.write(data)
            }

            res.end();
        })
    })  
});

server.listen(8089);