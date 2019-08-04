// 上传自己的包1.npm login 登录自己的npm账号2.npm init 初始化信息3.npm publish

exports.sum = function () {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

// 更新自己的包
//1.修改package.json中的version版本
//2.npm pubulish
exports.div = function (a,b) {
    return a / b;
}

// 删除自己上传的npm --force unpublish
// 如果有多个版本得一个一个得删(删一次修改版本号)