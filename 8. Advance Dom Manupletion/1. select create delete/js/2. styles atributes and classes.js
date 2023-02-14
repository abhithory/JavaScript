"use strict";

const heading1New = document.querySelector("#heading1");

console.log("------------");

console.log(heading1New.style.color); // here it will only give inline style


// this we can get all styles
console.log(getComputedStyle(heading1New).color);
console.log(getComputedStyle(heading1New).width);


heading1New.style.color = "red"
heading1New.style.fontSize = "42px"


// get css custom properties (variables)

document.documentElement.style.setProperty("--primary-color","green");


// atributes

const img = document.querySelector(".imgg");
console.log(img.alt);
console.log(img.src);

console.log(img.getAttribute('src'));
// img.setAttribute('src',"https://djfkld")
console.log(img.className);


console.log(img.dataset.thisCanBeChanged);


// heading1New.classList.add();
// heading1New.classList.remove();
// heading1New.classList.toggle();
// heading1New.classList.contains();


// heading1New.classList = ""
