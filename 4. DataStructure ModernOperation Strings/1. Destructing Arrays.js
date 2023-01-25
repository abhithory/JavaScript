// We can get data from array by these ways

const fruitsArray = ["mango","apple","graps","gvava"];

// Destructuring Array
const [firstFruit, secoundFruit,,fourthFruit] = fruitsArray;
console.log(firstFruit,secoundFruit,fourthFruit);


function twoElements(firstIndex,secoundIndex){
    return [fruitsArray[firstIndex],fruitsArray[secoundIndex]];
}


const [a,b] = twoElements(2,3);

console.log(a,b);

let x = 2;
let y = 3;

// chaning values of two variables
[y,x] = [x,y];

console.log(x,y);


// Default Values

const [xx = "No Fruit",yy = "No Fruit",zz = "No Fruit",aa = "No Fruit",bb = "No Fruit",cc = "No Fruit"] = fruitsArray;

console.log(xx,yy,zz,aa,bb,cc);