const path = require('path');

var str = 'c:\\wrap\\www\\a.html';

var obj = path.parse(str);
console.log(obj);
// { root: 'c:\\',
//   dir: 'c:\\wrap\\www',
//   base: 'a.html',
//   ext: '.html', // 扩展名
//   name: 'a' }