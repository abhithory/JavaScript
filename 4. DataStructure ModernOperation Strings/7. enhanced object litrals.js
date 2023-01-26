// ES6 enhanced object literals

const activities={
    jan:2,
    feb:3,
    march:5
}

const weekDays = ["mon","tue","wed"]

const availablelity = {
    [weekDays[0]]:"yes",
    the:"no",
    [weekDays[2]]:"yes"
}
const userObj={
    username:"stoic",
    age:12,
    // ES6 enhanced object literal
    activities,
    greeting(){
        console.log(`Hello, I am ${this.username}`);
    },
    availablelity
}

console.log(userObj);

