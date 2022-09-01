const fs = require('fs')
const path = require('path')

// console.log(path.resolve('file_test.txt'))
// fs.appendFile('file_test.txt',
//     'liubin11111',(err) => {
//     console.log(err)
//     })
//
// fs.readFile(path.resolve("file_test.txt"),'utf-8',
//     (err,data)=>{
//     console.log(data)
// })
// let buf = Buffer.alloc(10)

// fs.open('file_test.txt','r',(err,rfd)=>{
//     console.log(rfd)
//     fs.read(rfd,buf,1,5,0,(err,readBytes,data)=>{
//         console.log(readBytes)
//         console.log(data)
//         console.log(data.toString())
//     })
// })

let buf = Buffer.from('12345678')
fs.open('b.txt','w',(err,wfd)=>{
    fs.write(wfd,buf,0,3,0,(err,written,buffer)=>{
        console.log(written)
        console.log(buffer)
        console.log(buffer.toString())
    })

})



