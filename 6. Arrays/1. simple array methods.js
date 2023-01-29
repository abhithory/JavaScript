let arr = ['a','b','c','d','e','f','g'];

// slice - 
console.log(arr.slice(1,4));
console.log(arr.slice(1));
console.log(arr.slice(-1));
console.log(arr);


// splice 

console.log(arr.splice(1,3));
console.log(arr); // it will also change the original array

// reverse
arr = ['a','b','c','d','e','f','g'];
let arr2 = ['x','y','z'];

console.log(arr.reverse());
console.log(arr); // also change the original array
console.log(arr.reverse());


// concat
const arr3 = arr.concat(arr2);
const arr4 = [...arr,...arr2];
console.log(arr);
console.log(arr2); // will not change anything
console.log(arr3); 
console.log(arr4); 


// join

console.log(arr.join(" - "));
console.log(arr); // will not change anything


// at
console.log(arr[0]);
console.log(arr.at(0));

// getting last index
console.log(arr[arr.length - 1]);
// console.log(arr[-1]); // not work 
console.log(arr.at(-1));
console.log("abcd".at(-1));


// for each and of methods

const nums = [1,2,3,4,5,6,7,8,8,9];

// of for loop
console.log("--------of loop--------");
for(const [i,num] of nums.entries()){
    console.log(`${i} + ${num}`);
}


// for each
console.log("------foreach-------");

nums.forEach(function (num,i,numsFull){
    console.log(`${i}: ${num}`);
    // break;
})

// you can't use break in for each

// for each also works for map and sets

const mapss = new Map([
    ["a","aaaa"],
    ["b","bbbb"],
    ["c","cccc"],
    ["c","cccc"]
])


mapss.forEach(function (value,key,map){
    console.log(`${key}: ${value}`);
})