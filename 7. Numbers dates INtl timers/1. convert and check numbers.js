"use strict";

// All numbers are stored as float internally
console.log(12 === 12.0);


// base 10 - 0 to 9 -> this we use gernally
// base 2 -> 0 1 -> binary format

// Js use internally base 2 for storing numbers

// in binary format it is very hard to store fractions like- 0.1,0.2 etc...
console.log(0.1 + 0.2);
console.log(0.1 + 0.2===0.3);

// convert string to number
console.log("23");
console.log(Number("23"));
console.log(+"23");


console.log(Number.parseInt("20px"));
console.log(Number.parseInt("20.5px"));
console.log(Number.parseInt("20px",10));
console.log(Number.parseInt("e20px"));

console.log(Number.parseFloat("20.5px"));


// check any value is NaN
console.log(Number.isNaN(24));
console.log(Number.isNaN("24"));
console.log(Number.isNaN("a24"));
console.log(Number.isNaN(+"a24"));
console.log(Number.isNaN(24/0));


// check any value is number
console.log(Number.isFinite("24"));
console.log(Number.isFinite(+"24"));
console.log(Number.isFinite(24));
console.log(Number.isFinite("a24"));
console.log(Number.isFinite("24a"));
console.log(Number.isFinite(24/0));
// check any value is int
console.log(Number.isInteger(24));
console.log(Number.isInteger(24.5));