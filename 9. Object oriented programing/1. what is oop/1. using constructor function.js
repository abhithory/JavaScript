"use strict";

// Constructor function for creating class and object/instances


// can't use arrow function becuase it does not have its own this keyword
const Person = function(fullName,age){
    this.fullName = fullName;
    this.age = age;

    // never create function like this way
    // this.canVote = function (){
    //     return this.age > 10;
    // }
}



// use "new" keyword for create a instance 
const abhi = new Person("abhishek",21);
console.log(abhi);

// what new keyword do?
// 1. New {}/object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. {} automatically retured from function

const shekhar = new Person("Shekhar", 19);
console.log(shekhar);
console.log(shekhar instanceof Person);