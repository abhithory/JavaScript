// SPREAD, becuase on RIGHT side of =
const arr = [1, 2, 3, 4, ...[5, 6, 7]];


// REST, becuase on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);


// ----- in objects

const activity = {
    jan:4,
    feb:5,
    march:6,
    april:8
}

const {jan:january,...rest} = activity;

console.log(january,rest);


function add(...nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,7));
console.log(add(1,2,3));
console.log(add(1,2));
console.log(add(...[9,8]));
