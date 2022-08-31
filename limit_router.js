const async = require('async');
const RosApi = require('node-routeros').RouterOSAPI;
const request = require('request');

const res = (url)=>{
    return new Promise((resolve,reject)=>{
            request(url,(error,response,body)=>{
                if(!error && response.statusCode == 200){
                    resolve(body)
                }
            })
        }
    )}

const conn = new RosApi({
    host: '192.168.2.33',
    user: 'admin',
    password: 'XXXXXX',
    keepalive: true
});

async function api_adders_list(conn,adders){
    return new Promise((resolve,reject)=>{
        conn.write('/ip/firewall/address-list/add',
            [`=address=${adders}`,"=list=nodejs"]).then(data=>{
            resolve(data)
        })
            .catch(data=>{
                console.log("---------",data)
            })
    })
}

async function api_routes(conn,adders){
    return new Promise((resolve,reject)=>{
        conn.write('/ip/route/add',
            [`=dst-address=${adders}`,"=routing-table=test","=gateway=2.2.2.2"]).then(data=>{
            resolve(`${adders} ok`)
        })
            .catch(data=>{
                console.log("---------",data)
            })
    })
}
let now = new Date().getTime()
async function run(){

    let data = await res("https://raw.githubusercontent.com/cresky-github/RouterOS/main/WorldRoute.rsc")
    let reg = /(\d{1,3}\.){3}\d{1,3}\/\d{1,2}/g
    let now = new Date().getTime()
    let adders=data.match(reg)
    await conn.connect()
    console.log("start")

        //数字900是并发数量
    async.mapLimit(adders, 900, async item => { // <- no callback!
        let data = await api_routes(conn,item);
        return data; // <- return a value!
    }, (err, contents) => {
        if (err) throw err;
        console.log(contents);
        console.log(new Date().getTime()-now)
        conn.close

    });
 
    // console.log(adders.length)
}

run()
