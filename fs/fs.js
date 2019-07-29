const fs = require('fs');

// readFile(文件名，回调函数)
fs.readFile('aaa.txt',function (err,data) {
    // console.log(err,data);

    // data  直接返回的是buffer二进制数据,toString()可以
    // console.log(data.toString())
})


// writeFile(文件名，内容，回调)

fs.writeFile('bbb.txt',"让我走的好缓慢",function(err) {
    console.log(err)
})