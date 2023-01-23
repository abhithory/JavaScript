let newArray = [2,3,4,5,6];

var arrayLength = newArray.length;

console.log(newArray[0]);
console.log(newArray[arrayLength-1]);

newArray[0] = 5;

newArray.push(11)
let _newLength1 = newArray.push(11,33,22,112,324242);
console.log(newArray);

let _newLength2 = newArray.unshift(0,10,100); // add elements in starting

console.log(newArray);
console.log("at: "+ _newLength2);


let _removedValue = newArray.pop();
console.log(_removedValue);

let _removedValue2 = newArray.shift();
console.log(_removedValue2);

let getIndexOfThatNumber = newArray.indexOf(6);
let isThatNumberExits = newArray.includes(6);

console.log(getIndexOfThatNumber);
console.log(isThatNumberExits);



// --------- Objects

const userObj = {
    firstName:"Shekahr",
    lastName:"Kumar",
    age:55,
    isVerified:false,
    friends:["aa","bb","cc"],
    calculateCanVote: function (age){
        this.canVote = true;
        return age > this.age;
    }
}

// properties of object - firstName, age, is verified addTwoNumbers. and then these properties have corresponding values

console.log(userObj);
console.log(userObj.firstName);
console.log(userObj["firstName"]);
let getPropertie = "friends";
console.log(userObj["firstName"]);
console.log(userObj.getPropertie); // this will not work -> it will give undefied
console.log(userObj[getPropertie]);
const nn = "Name";
console.log(userObj["first" + nn]);
console.log(userObj["last" + nn]);


userObj.country = "india";
userObj['age'] = 22;
userObj['isMarried'] = true;

console.log(userObj);

userObj.calculateCanVote();
console.log(userObj);

