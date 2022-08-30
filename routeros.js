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
    console.log(await res("http://www.baidu.com"))
    console.log(await conn)
}



run()

