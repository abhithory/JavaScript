
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
