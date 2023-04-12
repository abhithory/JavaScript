// promise.race



async function callApis(){
// data will be here of only one call which is fastest
// if any promise reject first then show error    
const dataArray = await Promise.race([
        fetch("1"),
        fetch("2"),
        fetch("3")
    ])
}



// Promise.allsettled [es2021]

// it will fetch all request in prallel and return values of all. it does not matter any promise is rejected or not

Promise.allSettled([
    Promise.resolve("aaaa"),
    Promise.reject("error")
])



// Promise.any // give first resolved promise. ignore rejcted

Promise.any([
    Promise.resolve("aaaa"),
    Promise.reject("error")
])
