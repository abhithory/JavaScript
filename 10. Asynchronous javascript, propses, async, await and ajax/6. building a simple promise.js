const lotteryPromise = new Promise(function(resolve,reject){
    console.log("lottery draw is happending");

    setTimeout(function(){
        if (Math.random() >= 0.5) {
            reject("this is accepted")
        } else {
            reject("this is rejected")
        }
    },2000)
})

lotteryPromise.then(res=>console.log(res)).catch(err=> console.log(err))


const wait = function(sec){
    return new Promise(function(resolve){
        setTimeout(resolve,sec*1000)
    });
}



// promisfying the timeout
wait(2).then(()=>{
    console.log("waited for 2 secs");
}).then(()=> {
    console.log("waited for 4 secs");
});




Promise.resolve("aaa").then(res=>console.log(res))
Promise.reject("bbb").catch(res=>console.error("res"))