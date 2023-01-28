// JavaScript:-- high-level, object oriented, multi paradigm programming language
// high-level => designed to be more human-readable and abstracted away from the underlying computer hardware. Automatically manage many things like:- memory management
// object oriented programming => Object-oriented programming (OOP) is a programming paradigm that is based on the concept of "objects", which can contain data and methods that operate on that data. 
// it provides multiple ways of structuring and solving problems, rather than just one. Some of the most common paradigms include object-oriented programming (OOP), functional programming (FP), and procedural programming (PP).


//----------

//ECMAScript 5 (ES5) is the fifth version of the ECMAScript standard

//ECMAScript 6 (ES6) => after this all relaeses called moderen js

//----------


// Install Nodejs and VsCode

// for running any file - node filename.js

// console.log("Hello World!");



// Data types => any value can be Primitive or object
// primitive is datatype that can not be divided more in other data types
// in JS any value which is not object is primitive
// Dynamic Typing => we don't need to manually define the data type. it determined automatically


// primitive - 7
let var1 = "Shekhar"; // - String
let var2 = 1122; // - Number
let var3 = true; // - Boolean
let var4; // - undefined -> value of any variable that is not defined yet
let var6 = null;
// let var7  // symbol (es2015)
// let var8  // BigInt (es2020)


/*
console.log('===============Data types=====================');
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log('====================================');
*/


// objects
let var5 = {
    name: "Abhishek",
    age: 21,
}

// Operators
// mathmatical operators => + - * / %, **, +=, -+, /=,*/, ++,--

// Comparing operators => ===, !==, ==, !=, <, >, <=, =>,
// These will run according to their precedence order

// === => tight equality operator. it will not perform type convertion
// == => loose equality operator. it will  perform type convertion automatically

console.log("-------equality operator ----------");
const age = 18;
console.log(age === 18);            // true
console.log(age === "18");         // false
console.log(age !== "18");        // true
console.log(age == 18);          // true
console.log(age == "18");       // true
console.log(age != "18");       // false

// logical operators => && || !



// ---------- If else 

if (true) {
    console.log("");
} else if (false) {

} else {

}

if (false) console.log();

// conditional operator
22 === 20 + 2 ? console.log("correct") : console.log("incorrect");

const canVote = age >= 18 ? "can vote" : "can't vote";

// -------- Switch

const day = 'monday3';
switch (day) {
    case 'tuesday':
        console.log("tuesday");
        console.log("tuesday");
        console.log("tuesday");
        break;
    case 'monday':
        console.log("monday");
        break;
    case 'wednesday':
        break;
    case 'monday2':
        console.log("monday2");
    default:
        console.log("default");
        break;
}



//---------- functions

function addTwoNumbers(para1, para2) {
    return para1 + para2;
}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// ------------- arrow function (added in es6)

const calcAge2 = birthYear => 2037 - birthYear;
const calcAge3 = birthYear => {
    return 2037 - birthYear;
}

const addTwoNumbers = (para1, para2) => para1 + para2;
const addTwoNumbers = (para1, para2) => {
    return para1 + para2;
}


// --------- for loop

for (let i = 0; i < 50; i++) {

}
let i = 0;
while (i < 50) {
    i++;
}


