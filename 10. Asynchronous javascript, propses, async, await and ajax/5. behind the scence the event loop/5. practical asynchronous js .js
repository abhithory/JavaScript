console.log('Test start');
setTimeout(() => {
    console.log('0 sec timer');
}, 0);

Promise.resolve('Reolved promise 1').then(res => console.log(res))
console.log("Test end");

// result
// teststart
// testend
// resolved promise 1 => because it went to microtask queue
// 0 sec timer

// -------------


console.log('Test start');
setTimeout(() => {
    console.log('0 sec timer');
}, 0);

Promise.resolve('Reolved promise 1').then(res => console.log(res))
Promise.resolve('Reolved promise 2').then(res =>{
    for (let i = 0; i < 100000; i++) {}
    console.log(res)
})
console.log("Test end");


// result:----

// teststart
// testend
// resolved promise 1 => because it went to microtask queue
// resolved promise 2 => it takes more time and stop other process
// 0 sec timer



// -------------------