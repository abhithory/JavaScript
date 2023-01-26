//  a set have all unique values

// Iterable is an object which can be looped over or iterated over with the help of a for loop. Objects like lists, tuples, sets, dictionaries, strings, etc. are called iterables. In short and simpler terms, iterable is anything that you can loop over.
const ordersSet = new Set(["aa","bb","aa","cc","bb","dd","ff","ff","gg"])

const stringSet = new Set('shekhar');
// const numSet = new Set(12345); // it is not  iterable

console.log(ordersSet);
console.log(stringSet);


console.log(ordersSet.size);
console.log(ordersSet.has("aa"));
console.log(ordersSet.has("ab"));
console.log(ordersSet.add("ab"));
console.log(ordersSet.add("ab"));
console.log(ordersSet);
console.log(ordersSet.delete("ab"));
console.log(ordersSet);
// console.log(ordersSet[0]); // no index

for(const order of ordersSet){
    console.log(order);
}


const newArr = [...ordersSet];

console.log(newArr);

const staff = ["waiter","chef","waiter","manager","chef","waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set("abhishekthory").size);