const now = new Date();



const options = {hour:"numeric",minute:"numeric",day:"numeric",mount:"long",year:"numeric",weekday:"long"}
console.log(new Intl.DateTimeFormat("en-US",options).format(now));
console.log(new Intl.DateTimeFormat("en-UK",options).format(now));
console.log(new Intl.DateTimeFormat("pt-PT",options).format(now));


// const local = navigator.language; // works in browser
// console.log(local);

console.log(new Intl.DateTimeFormat("pt-PT",options).format(now));


// ------------- changing numbers

const num = 38884764.24

console.log("US: ", new Intl.NumberFormat("en-Us").format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE").format(num));

const options2 = {
    style: "unit",
    unit: "mile-per-hour",

}



console.log("US: ", new Intl.NumberFormat("en-Us",options2).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE",options2).format(num));


const options3 = {
    style: "unit",
    unit: "celsius",

}

console.log("US: ", new Intl.NumberFormat("en-Us",options3).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE",options3).format(num));



const options4 = {
    style: "currency",
    unit: "celsius",
    currency:"EUR"

}

console.log("US: ", new Intl.NumberFormat("en-Us",options4).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE",options4).format(num));
