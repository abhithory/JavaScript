
const anyString = "this is string";
const anyString2 = "OneString";

console.log(anyString2[0]);
console.log(anyString2[2]);
console.log(anyString[4]);

console.log(anyString.length);

console.log(anyString.indexOf("s"));
console.log(anyString.lastIndexOf("s"));

console.log(anyString.indexOf("is"));
console.log(anyString.indexOf("Is"));

console.log(anyString.slice(5));
console.log(anyString.slice(5,9));

console.log(anyString.slice(anyString.indexOf(" is ")));

console.log(anyString.slice(anyString.indexOf(" is "),13));

console.log(anyString.slice(-2));
console.log(anyString.slice(0,-2));

// js first create object from strings internally. then apply functions on it. and sends data
console.log(typeof "aa");
console.log(typeof new String("aa"));
// string is primitive. which have not functions

// functions on it also returns primitive
console.log(typeof new String("aa").length);




