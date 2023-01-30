
const arr = [11,44,1,4,6,17,99,21,11,8,9,2,5];


const firstValueGreaterThan15 = arr.find(value=> value > 15);

console.log(firstValueGreaterThan15);
const firstValueIndexGreaterThan15 = arr.findIndex(value=> value > 15);
console.log(firstValueIndexGreaterThan15);


// some

console.log(arr.some(value => value > 50));

//  every

console.log(arr.every(value => value > 0));
console.log(arr.every(value => value > 10));