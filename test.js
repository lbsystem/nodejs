const async = require('async');
(async () => {
    // 支持数组格式
    let list = [{
        'url': '1',
    }, {
        'url': '2',
    }];

    //数字10是并发数量
    async.mapLimit(list, 10, async item => { // <- no callback!
        let data = await toUrl(item);
        return data; // <- return a value!
    }, (err, contents) => {
        if (err) throw err;
        console.log(contents);
    });
})();

async function toUrl(item) {

    // 。。。 写处理逻辑
    console.log(item);
    return '处理完成';
}