const fruitsList = ["mango","banana","gavava"];

for(const item of fruitsList) console.log(item);

console.log([...fruitsList.entries()]);

for(const [index,item] of fruitsList.entries()) console.log(`${index+1}: ${item}`);