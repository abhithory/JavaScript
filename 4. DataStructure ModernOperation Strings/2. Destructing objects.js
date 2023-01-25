const userObj = {
    name:"Stoic",
    job:"developer"
}

const {name,job} = userObj;
console.log(name,job);

// const {name:userName,job:userJob} = userObj;
// console.log(userName,userJob);



const {name:userName = "defaultName",job:userJob = "No job", age:userAge = "no age"} = userObj;
console.log(userName,userJob,userAge);


// Mutating Variables

let a = 12;
let b = 9;

const obj = {a:55,b:66,c:99};

// {a,b} = obj; // we can't do that because js consider it expression becuase it starts with {}
({a,b} = obj);

console.log(a,b);

// Destructuring nested objects
const newObj = {
    userName:"stoic",
    activities:{
        jan:{
            firstweek:2,
            secoundWeek:1
        },
        feb:{
            firstweek:4,
            secoundWeek:3
        },
        march:{
            firstweek:5,
            secoundWeek:6

        }
    }
}

let {userName:UserFullName,activities:{jan:{firstweek:j1},feb:{secoundWeek:f2},march:{firstweek:m1,secoundWeek:m2}}} = newObj;

console.log(j1,f2,m1,m2);


function getActivityAndName(mounth,week){
    return {fullName:newObj.userName,activity:newObj.activities[mounth][week]};
}

const {fullName:userName2,activity} = getActivityAndName("march","secoundWeek");

console.log(userName2,activity);


function logGreeting({username = "Demo",age = "demo age",job = "demo job"}){
    console.log(`
    Hello, I am ${username}.
    my age is: ${age}.
    my job is: ${job}`);
}


logGreeting({username:"Shekhar",age:21,job:"Developer"});
logGreeting({job:"Developer"});