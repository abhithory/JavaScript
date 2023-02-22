"use strict"

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


class Student extends PersonCl{
    constructor(fName,age,course){
        super(fName,age);
        this.course = course;
    }
}