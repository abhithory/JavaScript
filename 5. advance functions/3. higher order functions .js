"use strict"
// check image 1

// functions accepting callback functions
// this is used for abstraction

const oneWord = function(str){
    return str.replace(/ /g,"").toLowerCase();
}

const upperFirstWord = function (str){
    const [firstWord,...otherwords] = str.split(" ");
    return [firstWord.toUpperCase(),...otherwords].join(" ");
}

// Higher order function
const transform = function (str,fn){
    console.log(`Original String: ${str}`);
    console.log(`Transaformed String: ${fn(str)}`);
    console.log(`Function Used: ${fn.name}`);
}

transform("Javascript is best language",oneWord);
transform("Javascript is best language",upperFirstWord);
