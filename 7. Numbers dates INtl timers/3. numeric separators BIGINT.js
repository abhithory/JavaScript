"use strict"

const value = 287_460_000_000;
console.log(value);

const PI = 3.1415_1;
console.log(PI);

console.log(Number("230_000")); // will not work in string

console.log(Number.parseInt("230_0_1"));
console.log(Number.parseFloat("230_01"));




// Big int

// maximam value that we can store in int
console.log(2**53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(416378461328476184618764187643287632);
console.log(416378461328476184618764187643287632n);
console.log(BigInt(416378461328476184618764187643287632));
console.log(BigInt(2**53 + 244646767));
console.log(typeof BigInt(2**53 + 3876767));

console.log(187376n +" is a big number");
console.log(Math.sqrt(16));
// console.log(Math.sqrt(16n)); // will not work

console.log(20n === 20);
console.log(20n === "20");
console.log(20n == "20");
console.log(20n == 20);



// console.log(10n/3); // not work
console.log(10n/3n);
// console.log(10/3n); // not work
console.log(10/3);