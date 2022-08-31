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
    password: 'p34mv160',
    keepalive: true
});

conn1 = function api(conn,addrs){
    return new Promise((resolve,reject)=>{



            conn.write('/ip/firewall/address-list/add',
                        [`=address=${addrs}`,"=list=nodejs"]).then(data=>{
                            resolve(data)
            })
                .catch(data=>{
                            console.log("---------",data)
            })

})


async function run(){
   let data = await res("https://raw.githubusercontent.com/cresky-github/RouterOS/main/WorldRoute.rsc")
    let reg = /(\d{1,3}\.){3}\d{1,3}\/\d{1,2}/g
    // let data1=data.search(/(\d{1,3}\.){3}\d{1,3}/g)
    let data1=data.match(reg)
    for(i of data1){
        console.log(i)
    // console.log(data1)
    }
    // console.log(data1)
    
}



run()

