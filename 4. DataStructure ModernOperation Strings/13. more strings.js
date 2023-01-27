const anyString = "this is String";
const anyString2 = "OneString";


console.log(anyString.toLowerCase());
console.log(anyString.toUpperCase());

const anyString3 = "shEKhaR";
const lowerString = anyString3.toLowerCase();
const finalString = lowerString[0].toUpperCase() + lowerString.slice(1);

console.log(finalString);


const email = "hello@gmail.com"
const newEmail = "    hello@gmail.com   \n";

const normalizedString = newEmail.toLowerCase().trim();

console.log(normalizedString);
console.log(normalizedString === email);

// -----

const priceGB = '288,12 POUND';
// const priceUS = priceGB.replace('POUND',"DOLLER");
const priceUS = priceGB.replace('POUND',"DOLLER").replace(",",".");

console.log(priceGB);
console.log(priceUS);

const para = "Hello, i am shekhar, i am a developer";

console.log(para.replace(",","."));
// console.log(para.replaceAll(",",".")); // not work perfectly always

// use regular expression
console.log(para.replace(/,/g,".")); 



console.log(para.includes("Hello"));
console.log(para.startsWith("Hello"));
console.log(para.endsWith("Hello"));




