const RosApi = require('node-routeros').RouterOSAPI;
const { connectionLabels } = require('mikronode');
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
    host: '192.168.1.36',
    user: 'admin',
    password: 'xxxxxxxxx',
    keepalive: true
});

async function api(conn,adders){
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
let tasks=[]
async function run(){

    let data = await res("https://raw.githubusercontent.com/cresky-github/RouterOS/main/WorldRoute.rsc")
    let reg = /(\d{1,3}\.){3}\d{1,3}\/\d{1,2}/g
    let now = new Date().getTime()
    let adders=data.match(reg)
    await conn.connect()
    for(i of adders){
        tasks.push(api(conn,i))
        // console.log(i)

    }
    Promise.all(tasks).then(data=>{
        console.log("ook")
        let _now = new Date().getTime()
        console.log(_now-now)
        conn.close()
    }).catch(e=>{
        console.log(e)
    })
    // console.log(adders.length)
}



run()

