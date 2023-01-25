"use strict"

// call stack
// heap Memory


// Primitive type variables
let age = 55;
let newAge = age;
age = 22;

console.log(age);
console.log(newAge);


// ---------

// Reference type variables
let userObj = {
    firstName:"Stoic",
    age:22
}
let newUserObj = userObj;
userObj.age = 32;
newUserObj.age = 21;


console.log("user object: " + userObj.age);
console.log("new User object: " + newUserObj.age);



// --------- copying Object



let userObj1 = {
    firstName:"shekhar",
    age:22,
    friends:["aa","bb","cc"]
}

// shallo copy of object. it will create only first layer and creaete new values in heap
let userObj2 = Object.assign({},userObj1);

// deep cloning we do with the help of libraries 

userObj2.firstName = "shekhar2"
userObj2.age = 222;
userObj2.friends.push("yy")
userObj2.friends.push("zz")

console.log(userObj1);
console.log(userObj2);

console.log("anthing");

