const jade = require('jade');
const fs = require('fs');
// 美化模板 pretty;
var str = jade.renderFile('./views/1.jade',{pretty: true});

console.log(str)
fs.writeFile('./build/2.html',str,function(err){
    if (err) {
        console.log('失败');
    } else {
        console.log('成功')
    }
})