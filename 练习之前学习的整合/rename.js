const fs = require('fs');

// 重命名文件
fs.rename('a.txt','b.txt',(err) => {
    console.log(err);
})