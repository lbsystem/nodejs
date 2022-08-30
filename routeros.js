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

conn = new Promise((resolve,reject)=>{
    const conn = new RosApi({
        host: '192.168.2.33',
        user: 'admin',
        password: 'p34mv160',
    });
    conn.connect()
    .then(() => {
        conn.write('/ip/address/print').then(data=>{
            resolve(data)
        conn.close()
        })
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

