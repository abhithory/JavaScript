const userObj = {
    username: "stoic",
    activity: {
        jan: {
            week1: 5,
            week2: 5
        },
        march: {
            week1: 5
        },
    },
    greet(){
        return "hello";
    }
}


if (userObj.activity.jan) {
    console.log(userObj.activity.jan.week1);
}

if (userObj.activity.feb) {
    console.log(userObj.activity.feb.week1); //give error
}

if (userObj.activity.march) {
    console.log(userObj.activity.march.week1);
}


// With optional chaining

console.log(userObj.activity.jan?.week1);
console.log(userObj.activity?.feb?.week1);
console.log(userObj.activity?.march?.week1);

// methods

console.log(userObj.greet?.() ?? "Method does not exits");
console.log(userObj.findage?.() ?? "Method does not exit");


const arr = [{name:"aa"},{name:"aa"},{name:"aa"}];

console.log(arr[0]?.name);
console.log(arr[7]?.name);