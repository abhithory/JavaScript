const userObj = {
    userName:"shekhar",
    rewards:[],
    addReward(rewardAmount,rewardType){
        console.log(`RewardAdded to ${this.userName}`);
        this.rewards.push({rewardAmount,rewardType});
    }
}

console.log(userObj);

userObj.addReward(12,"signup");
userObj.addReward(2,"loginin");

console.log(userObj);

const userObj2 = {
    userName:"shekhar2",
    rewards:[]
}

const addRewardToUser = userObj.addReward;

// addRewardToUser(55,"share") // not able to work without any oobject

// call method
addRewardToUser.call(userObj2,55,"share");
addRewardToUser.call(userObj2,55,"refer");

console.log(userObj2);


// apply method
const rewardData = [22,"refer"];
addRewardToUser.apply(userObj2,rewardData);

console.log(userObj2);

// use call function instead of apply function by this way
addRewardToUser.call(userObj2,...rewardData);
console.log(userObj2);

// bind function

const addrewarduser2 = addRewardToUser.bind(userObj2);

addrewarduser2(221,"post")
console.log(userObj2);

const addreward55user2 = addRewardToUser.bind(userObj2,55);

addreward55user2("refer");
addreward55user2("post");
addreward55user2("refer");
console.log(userObj2);


// document.querySelector(".addreward").addEventListener("click",userObj.addReward.bind(userObj));


// parial application

const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,200));

const addVat = addTax.bind(null,0.22);

console.log(addVat(500));


const addTax2 = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVat2 = addTax2(0.22);

console.log(addVat2(500));
