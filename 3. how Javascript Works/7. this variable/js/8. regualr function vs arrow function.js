"use strict"

const userObj = {
    firstName:"Stoic",
    age:21,
    greet: function(){
        console.log(`hello i am ${this.firstName}`);

        // const amIAdult =function(){
        //     console.log(this.age); // it will give error becuase this for this function is undefied. becuase its caller does not referaced to any object
        //     return this.age >= 18
        // }

        const amIAdult = () => {
            console.log(this.age); // here arrow function does  not have their own this keyword. they refer to their parent for this.
            return this.age >= 18
        }
        console.log(amIAdult());
    }
}

userObj.greet()


// ----------

//  argument keyword exits in normal function but does not exit in arrow function

function addvalues(a,b){
    console.log(arguments);
}

const addvalues2 = (a,b) => {
    console.log("2");
    console.log(arguments);
}

addvalues(1,2)
addvalues(1,2,3,4,5)


addvalues2(1,2)
addvalues2(1,2,3,4,5)