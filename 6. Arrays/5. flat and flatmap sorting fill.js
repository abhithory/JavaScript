const arr = [[1,2,3],[2,3,4],[98,8,7],[4,5,6,[6,46,4]]]

console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));

// flat map

// flat and also map

const arr2 = [
    {arr:[12,3,4,5]},
    {arr:[12,3,4,5]},
    {arr:[12,3,4,5]},
    {arr:[12,3,4,5]},
    {arr:[12,3,4,5]}
]

const _flated = arr2.flatMap(value=>value.arr)

console.log(_flated);

// shorting

const arrString = ["a","z","A","s","y","h","m"];

const arrNum = [1,6,8,4,12,55,11,100,0,-2,-5,-8,-12,-3];


// sort consider every value as string and then sort that. so there will be proble while comparing number values.
console.log(arrString.sort());
console.log(arrString); // it also changes original array
console.log(arrNum.sort());
console.log(arrNum);

// sort number by this way

// return < 0, A,B
// return > 0, B,A
console.log(arrNum.sort((a,b)=>a-b)); // for increasing order
console.log(arrNum.sort((a,b)=>b-a)); // for decresing order



// Empty array + fill method

const xArr = new Array(9);
console.log(xArr);

console.log(xArr.map(()=>7));

// xArr.fill(5)
// console.log(xArr);
// xArr.fill(5,2)
// console.log(xArr);

xArr.fill(5,2,4)
console.log(xArr);

const arrnew = [1,24,,5,6,6,34,4,42,42,2454,5];

// console.log(arrnew.fill(24));
console.log(arrnew.fill(24,2,5));

// from method

const y = Array.from({length:9},(value,i)=>i**i);

console.log(y);
