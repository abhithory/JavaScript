'use stript'

// default parameters
const createUser = function(
    username,
    age = 21,
    userid = "@"+username,
    college = "No college"
){
    console.log(username,age,userid,college);
}


createUser("shekhar");
createUser("shekhar",24);
createUser("shekhar",24,"@newshekahr");
createUser("shekhar",24,"@newshekahr","kirorimal");
createUser("shekhar",24,undefined,"kirorimal");