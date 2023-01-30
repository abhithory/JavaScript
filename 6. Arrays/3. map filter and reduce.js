
// map  

const arr = [1,2,3,4,5,6];

const newArray = arr.map(function(num,i,arr){
    return num**2;
})

const newArray2 = arr.map(num=>num**3)

console.log(newArray);
console.log(newArray2);
console.log(arr);


// exapmle

const userFullName = "Mr. Shekhar Thory";

const username = userFullName.toLowerCase().split(" ").map(str=>str[0]).join("");

console.log(username);


// filter


const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12];

const divisibleBy2 = arr2.filter(num=>num%2 === 0);

console.log(divisibleBy2);


// reduce method

// accumulator -> snoball
const total = arr2.reduce(function(acc,value,i,arr){
    console.log(`iteration ${i}: sum: ${acc}`);
    return acc+value;
})

console.log(total);

const total2 = arr2.reduce((acc,value)=>acc+value);
console.log(total2);


const arr3 = [11,44,1,4,6,17,99,21,11,8,9,2,5];

const max = arr3.reduce((acc,value)=>{
    if (acc > value) {
        return acc;
    } else {
        return value;
    }
})


console.log(max);



const sum33 = arr3.filter(value=>value>6).map(value=>value/2).reduce((acc,value)=>acc+value);

console.log(sum33);