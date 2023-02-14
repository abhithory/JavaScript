"use strict"

const toScrollPage2 = document.querySelector("#scrollToPage2");

const page2 = document.querySelector("#page2");


toScrollPage2.addEventListener("click",function (e){
    const page2Coordinates = page2.getBoundingClientRect();
    console.log(page2Coordinates);

    console.log(e.target.getBoundingClientRect());

    console.log("current scroll X/Y",window.scrollX,window.scrollY);

    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.clientWidth);


    // scrolling
    // window.scrollTo({left: page2Coordinates.left+window.scrollX, top:page2Coordinates.top+window.scrollY, behavior: 'smooth'});

    page2.scrollIntoView({behavior: 'smooth'})
})