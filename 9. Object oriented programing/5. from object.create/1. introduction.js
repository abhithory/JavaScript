"use strict"

const PersonProto = {
    greet(){
        console.log(`Hello ${this.fullName}`);
    },
}

const abhi = Object.create(PersonProto);
abhi.fullName = "shekhar";

abhi.greet();

console.log(abhi.__proto__ === PersonProto);



const PersonProto2 = {
    greet(){
        console.log(`Hello ${this.fullName}`);
    },
    init(fullName){
        this.fullName = fullName;
    }
}

const abhi2 = Object.create(PersonProto2);
abhi2.init("abhishek")

abhi2.greet();
