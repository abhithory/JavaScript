
const userid = "1122";
const userObj = {
    username:"shekhar",
    userid,
    isVerifed:false
}

function changeUser(id,userObj) {
    id = "2244";
    userObj.userid = "2244";
}


// only object will chnage because of its referance value
//  primitive will not change
changeUser(userid,userObj);

console.log(userid);
console.log(userObj);


function changeVerfication(userObj) {
    userObj.isVerifed = true;
}

changeVerfication(userObj);

console.log(userObj);

console.log(typeof changeUser);

