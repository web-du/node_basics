// 会报错，找不到该模块：引入自己定义的模块要加上路径，否则默认认为是找系统的模块，如果你写的js放在node_modules目录下也可以不加路径
// require:如果引入的前面有路径，则会从当前目录找，如果没有路径，则会从1.系统模块中找2.从node_modules目录下找（系统模块的优先级大于node_modules）
// const mod1 = require('mod.js');
// require:引入其他模块
// exports:输出模块
// module.exports:批量输出模块
const mod1 = require('./mod'); //.js可加可不加
// 下载自己的npm install dwz_test;
// const dwz = require('dwz_test');
console.log(mod1)



//npm:nodejs package manager(nodejs包管理器)
// 统一下载路径
// 自动下载依赖


// 更新下载的模块npm update dwz_test
// console.log(dwz.sum(1,2,3,5))
// console.log(dwz.div(6,3))


