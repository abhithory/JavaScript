"use strict"

const PersonProto = {
    greet(){
        console.log(`Hello ${this.fullName}`);
    },
    init(fName,age){
        this.fName = fName;
        this.age = age;
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(fName,age,course){
    PersonProto.init.call(this,fName,age);
    this.course = course;
}

const abhi = Object.create(StudentProto);