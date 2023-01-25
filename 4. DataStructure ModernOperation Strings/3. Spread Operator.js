const aArray = [1,2,3,4,5];

const newArray = [0,...aArray,6]

console.log(newArray);

const anyString = "ABCDEFGH";
// const stArray = ...anyString;
const stArray = [...anyString];
console.log(...anyString);


const userObj = {
    uName:"stoic",
    age:11,
    job:"developer"
}

const newuserObj = {isVerifed:true,...userObj};

console.log(newuserObj);