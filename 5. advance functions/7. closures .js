// In JavaScript, a closure is a function that has access to the variables in the scope in which it was defined, even after that scope has closed. This is possible because in JavaScript, functions are first-class citizens and can be passed around like any other variable.

// A closure is created when a function is defined inside another function, and it has access to the variables in the outer function's scope. The inner function can still access these variables even after the outer function has returned.

const userId = function (){
    let userid = 0;

    return function(){
        userid++;
        console.log(`${userid}: userno`);
    }
}

const addUser = userId();

addUser();
addUser();
addUser();


console.dir(addUser);


// Example 1

let ff;

const gg = function(){
    const xx = 55;

    ff = function(){
        console.log(xx*2);
    }
}

const hh = function(){
    const yy = 66;
    ff = function(){
        console.log(yy*2);
    }
}


gg();
ff();

// reassigning values
hh();
ff();