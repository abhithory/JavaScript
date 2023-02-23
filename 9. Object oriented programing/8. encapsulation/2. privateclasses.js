"use strict"

// class fields. some part of class fields are working but some part of class field is in proposel. it will be implemented soon
// fields = properties

//  new fields
// - Public Fields
// - Private Fields
// - Public Functions
// - Private Functions
//  static function


class User{
    // Public fields
    marks;

    // Private fields
    #upiPin;
    constructor(fullName,marks,upiPin){
        this.fullName = fullName;
        this.marks = marks;
        this.#upiPin = upiPin;
    }

    // public methods
    getMarks(){
        return this.marks;
    }

    // Private methods
    #getUpipin(){
        return this.#upiPin;
    }
}


const abhi = new User("Abhishek",99,776655);

console.log(abhi.fullName);
console.log(abhi.marks);
// console.log(abhi.#upiPin);
// console.log(abhi.#getUpipin());