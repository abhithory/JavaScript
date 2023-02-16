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
