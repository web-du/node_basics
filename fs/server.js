const http = require('http');
const fs = require('fs');
var server = http.createServer(function(req,res){
    // 获取定义在服务器上的文件
    var file_name = './www' + req.url;

    fs.readFile(file_name,function(err,data){
        if (err) {
            res.write('404')
        } else {
            res.write(data);
        }

        res.end();
    })
});

server.listen(8089);
