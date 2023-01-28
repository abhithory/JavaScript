'use strict';
const newName = "Shekhar Sharma"
const newString = "I+Am+Developer+.";

console.log(newString.split("+"));

const [firstName, lastName] = newName.split(" ");

const newUserName = ["Mr.", firstName, lastName].join(" ");
console.log(newUserName);


function capitalizeEveryName(names) {
    const arrNames = names.split(" ");
    const arrCaptilized = [];
    for (const nn of arrNames) {
        // arrCaptilized.push(nn[0].toUpperCase()+ nn.toLowerCase().slice(1));
        arrCaptilized.push(nn.replace(nn[0],nn[0].toUpperCase()));
    }
    return arrCaptilized.join(" ");
}

const someNames = "rahul shekhar abhishek rakesh"
console.log(capitalizeEveryName(someNames));


// -------------


console.log(newName.padStart(25,"+")); // length after padding
console.log(newName.padEnd(25,"+")); // length after padding


function maskNumber(number) {
    const str = String(number);
    const last4 = str.slice(-4);
    return last4.padStart(str.length,"*");
}


console.log(maskNumber("128972381751"));
console.log(maskNumber(198788376778));



function repeatString(str,times) {
    return str.repeat(times);
}

console.log(repeatString("this",6));
console.log(repeatString("m",7));
console.log(repeatString("shekahr ",7));
