// short && ||

// && || - Use any data type, retrun any data type, short-circuting
// short-circuting - check the first values if it truthy value then return that other wise next value


// or-------------- return first truthy value
console.log(3||"jonas");
console.log(0||"jonas");
console.log(''||"jonas");
console.log(false||"jonas");
console.log(true||"jonas");

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const userObj ={
    username:"stoic"
}

const age = userObj.age || 21;

console.log(age);
userObj.age = 23;
const age2 = userObj.age || 21;
console.log(age2);


// and ---------- return first faulty value

console.log(0 && "shekhar");
console.log(false && "shekhar");
console.log(true && "shekhar");
console.log("hello" && "shekhar");
console.log("hello" && "shekhar" && null && 5);

// if (userObj.isVerified) {
//     userObj.blueTick = true;
// }

// instead of that we can can use

userObj.isVerified && (userObj.blueTick = true);
console.log(userObj);

userObj.isVerified = true;

userObj.isVerified && (userObj.blueTick = true);
console.log(userObj);



// nullish operator
// Nullish - Null and undefiend (not 0 or '')


userObj.totalFriends = 0;

// nullish operator
const ff = userObj.totalFriends ?? 2;

const ff2 = userObj.totalFriends || 2;

console.log(ff);
console.log(ff2);




console.log("--------");
const user1 = {
    username:"shekhar",
    age:23,
    gamePoints:0
}


const user2 = {
    username:"shekhar2",
    job:"developer",
    phone:11223344,
}


// Or assignment operator

// user1.age = user1.age || 30;
// user2.age = user2.age || 30;
user1.age ||= 30;
user2.age ||= 30;

// nullish assignemnt
user1.gamePoints ??= 4;
user2.gamePoints ??= 4;

user1.phone &&= "Annonymous";
user2.phone &&= "Annonymous";

console.log(user1.age);
console.log(user2.age);

console.log(user1.phone);
console.log(user2.phone);


console.log(user1.gamePoints);
console.log(user2.gamePoints);





