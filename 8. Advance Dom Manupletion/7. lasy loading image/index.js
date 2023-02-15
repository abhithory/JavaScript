"use strict"

const allImages = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting){
        entry.target.classList.add("blur")
    }
    else{
        entry.target.src = entry.target.dataset.src;
        
        entry.target.addEventListener("load", function(){
            entry.target.classList.remove("blur")
        });
    }

    // observer.unobserve(entry.target);

}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.8,
    // rootMargin: "200px"
});

allImages.forEach(img => imgObserver.observe(img));