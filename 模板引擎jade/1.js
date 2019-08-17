const jade = require('jade');

// console.log(jade.renderFile('./views/3.jade',{pretty: true,name:"dwz",a:21,b:2}));
// console.log(jade.renderFile('./views/4.jade',{pretty: true,
//     json:{width:'200px',height:'200px',background:'red'},
//     arr:['aaa','left-wrap']
// }));
// console.log(jade.renderFile('./views/5.jade',{pretty: true,a:3,b:4}));
// console.log(jade.renderFile('./views/6.jade',{pretty: true,
//     arr:['d','w','z']
// }));
console.log(jade.renderFile('./views/7.jade',{pretty: true,
    content:"<h2>你好啊</h2><div>我是dwz</div>"
}));