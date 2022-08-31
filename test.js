const now = new Date().getTime();
for(i=0;i<100000000;i++){
    res=i*Math.round(Math.random()*350)
    res=res%10
    res=Math.cos(res)
}
console.log(res)
console.log(new Date().getTime()-now)

