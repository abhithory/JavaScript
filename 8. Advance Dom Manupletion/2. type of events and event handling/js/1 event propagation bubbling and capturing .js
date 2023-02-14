"use strict"

const randomInt = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1) +min )
}

const randomColor = () => {
    return `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
}

document.querySelector('.nav__link').addEventListener("click",function (e){
    this.style.backgroundColor = randomColor();

    console.log(e.target); // where we clicked
    console.log(e.currentTarget); // this current element

    console.log(e.currentTarget === this);


    // for stopping propagation 
    // e.stopPropagation()
})


document.querySelector('.nav__links').addEventListener("click",function (e){
    this.style.backgroundColor = randomColor();
    console.log(e.target); // where we clicked
    console.log(e.currentTarget); // this current element

    console.log(e.currentTarget === this);
})


document.querySelector('.nav').addEventListener("click",function (e){
    this.style.backgroundColor = randomColor();
    console.log(e.target); // where we clicked
    console.log(e.currentTarget); // this current element

    console.log(e.currentTarget === this);
})
