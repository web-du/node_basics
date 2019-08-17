const ejs = require('ejs');

// ejs.renderFile('./views/1.ejs',{name:"dwz"},function(err,data){
//     console.log(data);
// })
// ejs.renderFile('./views/2.ejs',{
//     json:{arr:[{user:'dwz',pass:"5236451"},
//     {user:'sxf',pass:"36451"},
//     {user:'zt',pass:"26451"}
//     ]
// }},function(err,data){
//     console.log(data);
// })
// ejs.renderFile('./views/3.ejs',{
//     json:{arr:[{user:'dwz',pass:"5236451"},
//     {user:'sxf',pass:"36451"},
//     {user:'zt',pass:"26451"}
//     ]
// }},function(err,data){
//     console.log(data);
// })
// ejs.renderFile('./views/4.ejs',{
// },function(err,data){
//     console.log(data);
// })
ejs.renderFile('./views/5.ejs',{
    type: 'user'
},function(err,data){
    console.log(data);
})