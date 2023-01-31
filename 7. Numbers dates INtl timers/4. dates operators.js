"use strict"


const date = new Date();
console.log(date);

console.log(new Date("Aug 01 2020 18:54:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(2037, 10, 19));

console.log(new Date(0));
console.log(new Date(1));

const future = new Date(2037, 10,19,9,30);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(4564675));

console.log(Date.now());

future.setFullYear(2027);
future.setMonth(11);

console.log(future);


// ------------ oprations

const newDateF = new Date(2037,10,19);
console.log(+newDateF);
console.log(Number(newDateF));

const calcDaysPassed =  (date1,date2) => Math.abs(date1-date2)/(1000*60*60*24);

console.log(calcDaysPassed(new Date(2022,10,20),new Date(2022,10,10)));
console.log(calcDaysPassed(new Date(2022,10,20),new Date(2022,10,15)));

