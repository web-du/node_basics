// const a = 123;
exports.a = 123;

// 当你写以下代码时
// var a = 12;
// var b = 3;

// node会给你默认加上匿名函数自执行

// (function (require,exports,module) {
//     var a = 12;
//     var b = 3;
// })();



// 当你要向外输出多个模块时，
// exports.b = 222;
// exports.c = 222;
// exports.d = 222;
// exports.e = 222;
// 很明显这不是我们想要的，所以可以用到module

//module.exports与exports是一个东西
console.log(module.exports === exports); // true

module.exports = {
    a:12,
    b:13,
    c:14
}

