const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"192.168.1.32",
    user:"root",
    password:"p34mv160",
    database:"BGP"
})
connection.connect();
async function _sql(connection,sql){
    return new Promise((resolve, reject) => {
        connection.query(sql,(error,res)=>{
            if(error) console.log(error);
            resolve(res)
            connection.end()
        })
    })
}

async function run(){
   let sql="select * from ipip where country='CN'";
   let res= await _sql(connection,sql);
    for(i of res){
        console.log(i.ASN)
    }
}
console.log("fdsf")
run()
