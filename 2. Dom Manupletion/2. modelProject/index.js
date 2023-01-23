"use strict"

const model = document.querySelector(".model");
const modelOverlay = document.querySelector(".model-overlay");
const hideModelBtn = document.querySelector(".hide-model");
const showModelBtns = document.querySelectorAll(".show-model-btn");

// console.log(hideModelBtn);
// console.log(showModelBtn[0]);

function showHideModelBtnClick() {
    if (model.classList.contains("hidden")) {
        model.classList.remove("hidden") 
    } else {
        model.classList.add("hidden") 
    }
}

for (let i = 0; i < showModelBtns.length; i++) showModelBtns[i].addEventListener("click",showHideModelBtnClick);

hideModelBtn.addEventListener("click",showHideModelBtnClick);
modelOverlay.addEventListener("click",showHideModelBtnClick);


// -------- listing to keyboard key press

// keydown, keypress, keyup
document.addEventListener("keydown",function(e){
    console.log(e.code );
    if (e.code === "Escape" && !model.classList.contains("hidden")) {showHideModelBtnClick();}
})
