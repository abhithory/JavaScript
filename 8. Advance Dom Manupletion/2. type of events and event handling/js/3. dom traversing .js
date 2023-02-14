"use strict";

const h1 = document.querySelector("h1");

// going downwards: child
console.log(h1.querySelectorAll("span"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "red";


// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest(".header"));


// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);