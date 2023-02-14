"use strict"

const nav = document.querySelector(".nav");

const h5 = document.querySelector("h5").getBoundingClientRect();
document.addEventListener("scroll",function(){
    console.log(window.scrollY);

    if (window.scrollY > h5.top ) {
        nav.style.position = "fixed"
        nav.style.color = "red"
    } else{
        nav.style.position = ""
        nav.style.color = "black"
    }
})