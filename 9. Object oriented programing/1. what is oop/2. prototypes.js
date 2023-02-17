"use strict"


// prototypes:---



// Person is created using contructor function
const Person = function(fullName,age){
    this.fullName = fullName;
    this.age = age;
}

const abhi = new Person("abhishek",21);

// console.log(Person.prototype);

// adding function to prototype
Person.prototype.canVote = function (){
    return this.age > 18;
}

// adding property to prototype
Person.prototype.species = "Human"

// Person.prototype is the prototype that will be used by all instance of this  

console.log(abhi.canVote());
console.log(abhi.species);

// this happed because
// Every object always have access to all methods and properties form its prototype

// we can get prototype of any object by this way
console.log(abhi.__proto__);
console.log(abhi.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(abhi));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(abhi.hasOwnProperty("fullName"));
// it is of prototype property
console.log(abhi.hasOwnProperty("species"));



// prototype chain
console.log(abhi.__proto__);

// Object.prototype (top of prototype chain)
console.log(abhi.__proto__.__proto__);

// there is no prototype of object.prototype
console.log(abhi.__proto__.__proto__.__proto__);



// prototype of arrays

const arr = [3,5,3,3,2,7,8,9,5,2]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

console.log(arr.__proto__ === Array.prototype);


// creating custom functions for prototype
Array.prototype.unique = function () {
    return [...new Set(this)];
}


console.log(arr.unique());



