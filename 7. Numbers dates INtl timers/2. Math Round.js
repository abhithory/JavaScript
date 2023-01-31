"use strict"


console.log(Math.sqrt(25));
console.log(Math.abs(-55));
console.log(25**1/2);
console.log(Math.PI);

console.log(Math.min(1,2,3,4,5,6,7,'24px','0a'));

console.log(Math.max(2,5,6,7,8,2));


// 0-1 random value

console.log(Math.random());

console.log(Math.trunc(22.2));
console.log(Math.trunc(Math.random()*1000));


const randomInt = (min,max) => Math.floor(Math.random()*(max-min)+1)+min;

console.log(randomInt(10,15));
console.log(randomInt(10,18));
console.log(randomInt(15,38));
console.log(randomInt(15,308));


console.log(Math.trunc(23.3));
console.log(Math.trunc(23.8));
console.log(Math.round(23.3));
console.log(Math.round(23.8));
console.log(Math.round(-23.8));

console.log("ceil");
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));
console.log("floor");
console.log(Math.floor(23.3));
console.log(Math.floor(-23.3));
console.log(Math.floor(23.8));


// rounding decimals

console.log((2.34).toFixed(0));
console.log((2.34).toFixed(2));
console.log(+(2.34).toFixed(3));


// remainder operator

console.log(22%10);

const isEven = num => num%2===0;

console.log(isEven(22));
console.log(isEven(221));
console.log(isEven(2210));

