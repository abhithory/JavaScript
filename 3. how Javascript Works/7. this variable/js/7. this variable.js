"use strict"

// check image 8

console.log(this);


function add(num1,num2){
    console.log(num1 + num2);
    console.log(this);

    const add2 = (num1,num2) => {
        console.log("inside");
        console.log(num1 + num2);
        console.log(this);
    }
    
    add2(4,5);
}

add(5,6)


const add2 = (num1,num2) => {
    console.log(num1 + num2);
    console.log(this);
}

add2(4,5);


// ---------------

const userObj = {
    userName:"stoicDev",
    age:32,
    callName: function(){
        console.log(this.userName); // Normal function have their own this keyword. Which is reffered to their object which is calling method
    },
    callAge:()=>{
        console.log(this); // arrow function doesnot have their own this keyword. they just get from parent.
    }

}

userObj.callName();
userObj.callAge();