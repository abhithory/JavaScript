"use strict"

const nav = document.querySelector(".nav");

const h5 = document.querySelector("h5").getBoundingClientRect();

const fullpage1 = document.querySelector("#fullpage-1");



// const obsCallback = function (entries,observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// };
// const obsOptions = {
//     root:null,
//     threshold:[0,0.2],
// }
// const ovserver = new IntersectionObserver(obsCallback,obsOptions);
// ovserver.observe(fullpage1)

const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);

        if (!entry.isIntersecting) {
            nav.style.position = "fixed"
            nav.style.color = "red"
        } else {
            nav.style.position = ""
            nav.style.color = "black"
        }
    });
};
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-90px"
}
const ovserver = new IntersectionObserver(obsCallback, obsOptions);
ovserver.observe(fullpage1)

