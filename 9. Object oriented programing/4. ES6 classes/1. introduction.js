"use strict";

// Classes in  JS do not work as like other languages. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. 

// here classes are also special type of functions

// class expression
// const Person = class {}

// class declaration
class PersonCl {
    constructor(fName,age){
        this.fName = fName;
        this.age = age;
    }

    // Methods will be added to .prototype property
    greet(){
        console.log(`Hello i am ${this.fName}`);
    }

    greetAge(){
        console.log(`My age is ${this.age}`);
    }
}

const abhi = new PersonCl("Abhishek",22);
abhi.greet()

console.log(abhi.__proto__ === PersonCl.prototype);

PersonCl.prototype.NameAge = function(){
    console.log(`My name is ${this.fName} and age os ${this.age}`);
}

abhi.NameAge();


// 1. Classes are NOT hoisted : we can't acess class before declaration
// 2. classes are first-class citizens: we can pass in function
// 3. classes will be executed with strict mode
