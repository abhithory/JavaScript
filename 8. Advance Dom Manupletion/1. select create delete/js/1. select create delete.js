"use strict"


const entireHtml = document.documentElement;
const headHtml = document.head;
const bodyHtml = document.body;

const firstBtn = document.querySelector(".btn");
console.log(firstBtn);

const allBtns = document.querySelectorAll(".btn");
console.log(allBtns);

const para3 = document.querySelectorAll(".para");
console.log(allBtns);


// by this way we can select live elements. these will change whenever the elements change in html

const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const allPara = document.getElementsByTagName("p");
console.log(allPara);

const allPara2 = document.getElementsByClassName("para");
console.log(allPara2);



// create elements

const message = document.createElement("div");
message.classList.add("para");
// message.textContent = "this is text"
message.innerHTML = "Hello, this is demo text. <button class='btn' id='click-me-delete'>Click me</button>";

bodyHtml.prepend(message);
// bodyHtml.append(message);
// bodyHtml.append(message.cloneNode(true));

// heading2.before(message)
// heading2.after(message.cloneNode(true))



para3.forEach(function(para){
    const newPara = `
    <p class=${para.classList}>2222222${para.textContent}</p>
    `
    document.getElementById("newContent").insertAdjacentHTML("afterbegin",newPara);
})

// deleting elements

document.querySelector("#click-me-delete").addEventListener("click",function(){
    message.remove(); // new

    // message.parentElement.removeChild(message);
})
