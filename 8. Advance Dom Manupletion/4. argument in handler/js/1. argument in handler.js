"use strict"

const nav = document.querySelector('.nav');

const handleHover = function (e){
    if (e.target.classList.contains("nav_link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav_link");

        siblings.forEach(element => {
            if (link !== element) {
                element.style.opacity = this;
            }
        });
        
    }
}

// nav.addEventListener("mouseover",(e)=>handleHover(e,1))
nav.addEventListener("mouseover",handleHover.bind(0.5))
nav.addEventListener("mouseout",handleHover.bind(1))