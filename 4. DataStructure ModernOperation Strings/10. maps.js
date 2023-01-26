const newMap = new Map();

newMap.set("name","stoic");
newMap.set(true,"aabb");
newMap.set(false,"sdddd");

newMap.set("categories",["a","b",..."adfdsf"]);

console.log(newMap);

console.log(newMap.get("name"));
console.log(newMap.get(false));

console.log(newMap.has("name"));
newMap.delete("name");
console.log(newMap.get("name"));

const aa = [1,2]
console.log(newMap.set(aa,"test"));
console.log(newMap.get(aa));
console.log(newMap);


// ---------

const question = new Map([
    ['question',"what is the best programming language in world?"],
    [1,"C"],
    [2,"Rust"],
    [3,"Js"],
    ["correct",2],
    [true,"Wow. correct"],
    [false,"try again"]
]);

console.log(question.get("question"));
for(const [key,value] of question){
    typeof key === "number" && console.log(`Answer ${key}: ${value}`);
}

const userans = 2;
console.log(question.get(question.get("correct")===userans));


console.log([...question]);