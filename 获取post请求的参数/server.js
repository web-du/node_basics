const http = require('http');
const querystring = require('querystring');

var server = http.createServer((req,res) => {
    // post数据是分段发送的(目前不考虑文件数据)
    var str = "";
    //data事件，数据每发生一次就执行一次
    req.on('data',function(data){
        console.log(data)
        str +=data;
    });

    //end  数据全部到达时，只发生一次
    req.on('end',function(){
        // console.log(str);

        var post = querystring.parse(str);
        console.log(post)
        res.end();
    });
});

server.listen(8089);