// let ll = item => item.data




// let data = [
//     {data:1},
//     {data:2},
//     {data:3}
// ]

// let dict1 = {data:"fdfdfd"}

// let kk = ll(dict1)

// console.log(kk)

process.stdin.setEncoding('utf8');

// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
function readlineSync() {
    return new Promise((resolve, reject) => {
        process.stdin.resume();
        process.stdin.on('data', function (data) {
            process.stdin.pause(); // stops after one line reads
            resolve(data);
        });
    });
}

async function main() {
    let sum=0
    let count=-1
    // entry point
    let single =1
    while(single != 0){
        tmp = await readlineSync();
        single = tmp;
        sum += single;
        console.log("dddddd",sum)
        count += 1
        
    }
    console.log("s",sum)
    console.log("c",count)
    console.log(sum/count)
}

main();
